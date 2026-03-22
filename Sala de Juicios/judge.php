<?php
/**
 * PROXY PHP — Sala de Juicios (Groq, GRATUITO)
 * Para hostings compartidos que solo soportan PHP (cPanel, etc.)
 *
 * Uso:
 *   1. Consigue tu API key gratuita en https://console.groq.com
 *   2. Pon tu key en GROQ_API_KEY (o como variable de entorno del servidor)
 *   3. Sube este archivo como "judge.php" junto a sala_juicio_v2.html
 *   4. En el juego, PROXY_URL ya apunta a '/judge.php' si están en la misma carpeta
 */

// ── Configuración ────────────────────────────────────────────
define('GROQ_API_KEY',  getenv('GROQ_API_KEY') ?: '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');
define('GROQ_MODEL',    'llama-3.3-70b-versatile');
define('GROQ_ENDPOINT', 'https://api.groq.com/openai/v1/chat/completions');
define('DAILY_LIMIT',   20);           // llamadas por IP por día, 0 = sin límite
define('ALLOWED_ORIGIN','https://unoxdosia.es'); // tu dominio
// ─────────────────────────────────────────────────────────────

header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); echo json_encode(['error'=>'Método no permitido.']); exit; }

// ── Rate limiting ────────────────────────────────────────────
function checkRateLimit(string $ip): bool {
  if (DAILY_LIMIT === 0) return true;
  $dir = sys_get_temp_dir() . '/sala_juicios_rl/';
  if (!is_dir($dir)) mkdir($dir, 0700, true);
  $key  = md5($ip . date('Y-m-d'));
  $file = $dir . $key . '.txt';
  $count = file_exists($file) ? (int)file_get_contents($file) : 0;
  if ($count >= DAILY_LIMIT) return false;
  file_put_contents($file, $count + 1);
  return true;
}

$ip = isset($_SERVER['HTTP_X_FORWARDED_FOR'])
    ? trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0])
    : $_SERVER['REMOTE_ADDR'];

if (!checkRateLimit($ip)) {
  http_response_code(429);
  echo json_encode(['error' => 'Has alcanzado el límite de partidas por hoy. Vuelve mañana.']);
  exit;
}

// ── Leer body ────────────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);
if (!$body || !isset($body['messages']) || !is_array($body['messages'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Petición inválida.']);
  exit;
}

// Groq usa formato OpenAI: system prompt como primer mensaje
$messages = array_merge(
  [['role' => 'system', 'content' => $body['system'] ?? '']],
  $body['messages']
);

// ── Llamada a Groq ───────────────────────────────────────────
$payload = json_encode([
  'model'       => GROQ_MODEL,
  'max_tokens'  => $body['max_tokens'] ?? 1000,
  'messages'    => $messages,
  'temperature' => 0.7,
]);

$ch = curl_init(GROQ_ENDPOINT);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST           => true,
  CURLOPT_POSTFIELDS     => $payload,
  CURLOPT_HTTPHEADER     => [
    'Content-Type: application/json',
    'Authorization: Bearer ' . GROQ_API_KEY,
  ],
  CURLOPT_TIMEOUT => 30,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
  http_response_code(502);
  echo json_encode(['error' => 'Error de conexión con Groq.']);
  exit;
}

// Convertir respuesta OpenAI al formato que espera el juego
$groqData = json_decode($response, true);
if ($httpCode === 200 && isset($groqData['choices'][0]['message']['content'])) {
  $text = $groqData['choices'][0]['message']['content'];
  echo json_encode(['content' => [['type' => 'text', 'text' => $text]]]);
} else {
  http_response_code($httpCode);
  echo $response;
}

