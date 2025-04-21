<?php
$folder = __DIR__ . '/custom/';

if (!file_exists($folder)) {
    mkdir($folder, 0777, true);
}

$data = json_decode(file_get_contents('php://input'), true);

$filename = bin2hex(random_bytes(4)) . '.html';
$filepath = $folder . $filename;

$html = $data['html'] ?? '';
$fullHTML = <<<HTML
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <title>Custom Side</title>
    <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
    <div class="deshes-area section-padding text-center mt-5">
        {$html}
    </div>
</body>
</html>
HTML;

file_put_contents($filepath, $fullHTML);

echo json_encode(['filename' => $filename]);
?>
