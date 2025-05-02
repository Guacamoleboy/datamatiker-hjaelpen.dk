<?php

function generateBlob(string $outputPath, array $blobColor = [150, 200, 255]) {
    // Create transparent 1000x1000 canvas
    $image = imagecreatetruecolor(1000, 1000);
    imagesavealpha($image, true);
    $transparent = imagecolorallocatealpha($image, 0, 0, 0, 127);
    imagefill($image, 0, 0, $transparent);

    // Blob color (same for all blobs unless overridden)
    [$r, $g, $b] = $blobColor;
    $color = imagecolorallocatealpha($image, $r, $g, $b, 10); // Soft pastel look

    // Generate random blob shape
    $points = [];
    $centerX = 500;
    $centerY = 500;
    $radius = rand(300, 400); // Bigger radius for big blobs
    $angleStep = rand(20, 40); // Randomize smoothness

    for ($angle = 0; $angle < 360; $angle += $angleStep) {
        $r2 = $radius + rand(-80, 80); // Bigger wobble for fun blobs
        $x = $centerX + cos(deg2rad($angle)) * $r2;
        $y = $centerY + sin(deg2rad($angle)) * $r2;
        $points[] = $x;
        $points[] = $y;
    }

    // Draw the blob
    imagefilledpolygon($image, $points, count($points) / 2, $color);

    // Save and cleanup
    imagepng($image, $outputPath);
    imagedestroy($image);
}

// Example call
generateBlob('./blobs/blob_1.png');
?>