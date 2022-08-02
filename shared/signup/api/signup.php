<?php

declare(strict_types=1);

#connecting to DB
$conn = mysqli_connect('localhost', 'root', '', 'delta_fitness_db');

if ($conn->connect_error) {
    echo "Failed to connect: " . $conn->connect_error;
}

$status = true;
$messages = array();

#getting user data from form

$data = json_decode(file_get_contents('php://input'),true);
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$email = $data['email'];
$password = $data['password'];
$passwordConfirmation = $data['passwordConfirmation'];


if (!isset($firstName) || empty($firstName)) {
   
    $status = false;
  //  $messages[] = 'from sever' + $firstName;
    $messages[] = 'User Field cannot be empty!';
}
if (!isset($lastName) || empty($lastName)) {
    $status = false;
    $messages[] = 'User Field cannot be empty!';
}
if (!isset($email) || empty($email)) {
    $status = false;
    $messages[] = 'User Email cannot be empty!';
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

if($status){

    $insertUserQuery = "INSERT INTO users (first_name, last_name, email, password) VALUE 
            ('$firstName', '$lastName', '$email', '$hashedPassword')";
    $result = mysqli_query($conn, $insertUserQuery);
    
    if ($result) {
        $messages[] = 'User added successfully';
    } else {
        $messages[] = 'Failed to add User';
    }
}

echo json_encode(
    array(
        'status' => $status,
        'messages' => $messages,
    )
);

mysqli_close($conn);
