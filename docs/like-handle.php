<?php
header('Content-Type: application/json');

$file = 'assets/json/like-dislike.json';
$data = json_decode(file_get_contents($file), true);

if (!is_array($data)) {
    $data = ["likes" => 0, "dislikes" => 0];
}

$action = $_POST['action'] ?? '';

if ($action === 'like') {
    $data['likes'] += 1;
} elseif ($action === 'dislike') {
    $data['dislikes'] += 1;
}

file_put_contents($file, json_encode($data));

echo json_encode($data);
?>