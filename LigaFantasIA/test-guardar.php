<?php
// test-guardar.php — Sube esto a /LigaFantasIA/ y ábrelo en el navegador
header('Content-Type: text/html; charset=utf-8');

$dir   = __DIR__;
$file  = $dir . '/datos-liga.json';

echo "<h2>🔬 Diagnóstico guardar.php</h2><pre>";

// 1. Permisos del directorio
echo "📁 Directorio: $dir\n";
echo "   Existe: "    . (is_dir($dir)     ? '✅ SÍ' : '❌ NO') . "\n";
echo "   Escribible: ". (is_writable($dir) ? '✅ SÍ' : '❌ NO — ESTE ES EL PROBLEMA') . "\n\n";

// 2. Permisos del archivo
echo "📄 Archivo: $file\n";
echo "   Existe: "    . (file_exists($file)  ? '✅ SÍ' : '⚠️  No existe aún') . "\n";
if(file_exists($file)){
    echo "   Escribible: ". (is_writable($file) ? '✅ SÍ' : '❌ NO — ESTE ES EL PROBLEMA') . "\n";
    echo "   Tamaño: "    . filesize($file) . " bytes\n";
    echo "   Contenido: " . file_get_contents($file) . "\n";
}
echo "\n";

// 3. Intentar escribir
$test = ['test' => true, 'ts' => time()];
$ok   = file_put_contents($file, json_encode($test, JSON_PRETTY_PRINT));
echo "✏️  Intento de escritura: " . ($ok !== false ? "✅ OK ($ok bytes escritos)" : "❌ FALLÓ — sin permisos de escritura") . "\n\n";

// 4. Verificar lectura tras escritura
if($ok !== false){
    $read = json_decode(file_get_contents($file), true);
    echo "📖 Lectura tras escritura: " . ($read['test'] === true ? '✅ OK' : '❌ Error') . "\n";
    // Limpiar el test
    file_put_contents($file, '{}');
    echo "🧹 Archivo limpiado a {}\n";
}

echo "\n";

// 5. Consejo
if(!is_writable($dir) || ($ok === false)){
    echo "🔧 SOLUCIÓN:\n";
    echo "   Desde el panel de tu hosting, da permisos 755 a la carpeta LigaFantasIA\n";
    echo "   y permisos 664 al archivo datos-liga.json\n";
    echo "   O por SSH: chmod 664 datos-liga.json && chmod 755 " . basename($dir) . "\n";
}

echo "</pre>";
?>
