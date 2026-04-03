<?php
// ============================================================
// guardar.php — Guarda y sirve datos de Liga Fantas-IA
// Ubicación: /LigaFantasIA/guardar.php
// ============================================================

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit;
}

$DATA_FILE = __DIR__ . '/datos-liga.json';

// ── GET: devolver los datos actuales ──
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($DATA_FILE)) {
        echo file_get_contents($DATA_FILE);
    } else {
        echo '{}';
    }
    exit;
}

// ── POST: sobreescribir con el payload completo ──
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    if (!$raw || trim($raw) === '') {
        http_response_code(400);
        echo json_encode(['error' => 'Sin datos']);
        exit;
    }

    $data = json_decode($raw, true);
    if ($data === null) {
        http_response_code(400);
        echo json_encode(['error' => 'JSON invalido: ' . json_last_error_msg()]);
        exit;
    }

    // LOCK_EX evita escrituras simultaneas (el problema anterior)
    $ok = file_put_contents(
        $DATA_FILE,
        json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT),
        LOCK_EX
    );

    if ($ok === false) {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo escribir el archivo']);
        exit;
    }

    echo json_encode(['ok' => true, 'bytes' => $ok]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Metodo no permitido']);
?>
