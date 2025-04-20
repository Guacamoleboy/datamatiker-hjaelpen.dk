<?php

    // Setup af vores database
    $host = 'datamatiker-hjaelpen.dk.mysql';
    $db = 'datamatiker_hjaelpen_dkadmin';
    $user = 'datamatiker_hjaelpen_dkadmin';
    $pass = 'Andreaslugter123!';

    // Opret connection
    $conn = new mysqli($host, $user, $pass, $db);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Hent data fra vores <form>
    $username = trim($_POST['username']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $email = trim($_POST['email']);

    // Check data
    if (!$email) {
        die("Invalid email format.");
    }

    if ($password !== $confirm_password) {
        die("Passwords do not match.");
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Tilføj til vores database
    $sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Error checks
    if (!$stmt) {
        die("Preparation failed: " . $conn->error);
    }

    $stmt->bind_param("sss", $username, $hashedPassword, $email);

    // Oprettet eller fejl
    if ($stmt->execute()) {
        echo "Bruger oprettet!";
    } else {
        echo "Fejl: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();

?>
