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
    <!-- Required Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Page Title -->
    <title>Datamatiker-hjaelpen.dk</title> 

    <!-- Favicon -->
    <link rel="shortcut icon" href="../assets/images/image1.png" type="image/x-icon">

    <!-- Navbar load -->
    <script src="../assets/js/navbar2.js" defer></script>

    <!-- CSS Files -->
    <link rel="stylesheet" href="../assets/css/animate-3.7.0.css">
    <link rel="stylesheet" href="../assets/css/font-awesome-4.7.0.min.css">
    <link rel="stylesheet" href="../assets/css/bootstrap-4.1.3.min.css">
    <link rel="stylesheet" href="../assets/css/owl-carousel.min.css">
    <link rel="stylesheet" href="../assets/css/jquery.datetimepicker.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body class="dark-mode">
    <div class="deshes-area section-padding text-center mt-5">
        {$html}
    </div>
</body>
</html>
HTML;

file_put_contents($filepath, $fullHTML);

echo json_encode(['filename' => $filename]);
?>
