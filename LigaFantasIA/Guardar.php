<?php
// ============================================================
// guardar.php — API de datos Liga Fantas-IA
// ============================================================

header('Access-Control-Allow-Origin: https://www.unoxdosia.com');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$DATA_FILE = __DIR__ . '/Datosliga.json';

// ——— GET: devolver los datos actuales ———
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($DATA_FILE)) {
        echo file_get_contents($DATA_FILE);
    } else {
        echo json_encode((object)[]);
    }
    exit;
}

// ——— POST: guardar datos ———
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    if (!$raw) {
        http_response_code(400);
        echo json_encode(['error' => 'Sin datos']);
        exit;
    }

    $data = json_decode($raw, true);
    if ($data === null) {
        http_response_code(400);
        echo json_encode(['error' => 'JSON inválido']);
        exit;
    }

    $existing = [];
    if (file_exists($DATA_FILE)) {
        $existing = json_decode(file_get_contents($DATA_FILE), true) ?? [];
    }
    $merged = array_merge($existing, $data);

    // --- NUEVA LÓGICA DE PERMISOS ---
    // Si el archivo no existe, lo creamos vacío primero
    if (!file_exists($DATA_FILE)) {
        file_put_contents($DATA_FILE, json_encode((object)[]));
    }
    // Forzamos el permiso 666 para que el servidor siempre pueda leer/escribir
    chmod($DATA_FILE, 0666); 
    // --------------------------------

    $ok = file_put_contents($DATA_FILE, json_encode($merged, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    
    if ($ok === false) {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo escribir. Revisa permisos de la CARPETA.']);
        exit;
    }

    echo json_encode(['ok' => true, 'bytes' => $ok]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Método no permitido']);
