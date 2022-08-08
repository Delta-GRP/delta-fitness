<?php

declare(strict_types=1);
require_once '../../partials/db_connect.php';

$connectDatabase = new ConnectDatabase();

$conn = $connectDatabase->connect_db();

$status = true;
$messages = array();

$data = json_decode(file_get_contents('php://input'), true);
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$email = $data['email'];
$password = $data['password'];
$passwordConfirmation = $data['passwordConfirmation'];


if (!isset($firstName) || empty($firstName)) {

    $status = false;
    $messages[] = 'User Field cannot be empty!';
}
if (!isset($lastName) || empty($lastName)) {
    $status = false;
    $messages[] = 'User Field cannot be empty!';
}
if (!isset($email) || empty($email)) {
    $status = false;
    $messages[] = 'User Email cannot be empty!';
} else {
    $fetchEmail = "SELECT Email FROM users where Email = '$email'";
    $check_email = mysqli_query($conn, $fetchEmail);
    if (mysqli_num_rows($check_email) > 0) {
        $status = false;
        $messages[] = 'Email Already exists';
    }
}
if (!isset($password) || empty($password)) {
    $status = false;
    $messages[] = 'User Password cannot be empty!';
}


if ($password == $passwordConfirmation) {
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
} else {
    $status = false;
    $messages[] = 'Password mismatch';
}

if ($status) {

    $insertUserQuery = "INSERT INTO users (first_name, last_name, email, password) VALUE 
            ('$firstName', '$lastName', '$email', '$hashedPassword')";
    $result = mysqli_query($conn, $insertUserQuery);

    if ($result) {
        $messages[] = 'User account created successfully';
        $messages[] = 'Login to continue';
    } else {
        $messages[] = 'Failed to add User!';
    }
}

echo json_encode(
    array(
        'status' => $status,
        'messages' => $messages,
    )
);

$connectDatabase->close_connection();
