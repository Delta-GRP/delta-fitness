<?php

declare(strict_types=1);

require_once '../../partials/db_connect.php';
require_once '../../local_repository/session_cookies.cls.php';


$connectDatabase = new ConnectDatabase();

$conn = $connectDatabase->connect_db();

$sessionCookies = new SessionCookies();

$sessionCookies->startSection();

$status = true;
$messages = array();

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$password = $data['password'];

//print_r($_POST);


if (!isset($email) || empty($email)) {
    $status = false;
    $messages[] = 'Email field must not be empty!';
}

if (!isset($password) || empty($password)) {
    $status = false;
    $messages[] = 'Password field must be provided!';
}

if ($status) {
    $fetch_user_query = "SELECT * FROM users where Email = '$email'";
    $result = mysqli_query($conn, $fetch_user_query);
    $user = $result->fetch_assoc();
    if(mysqli_num_rows($result) > 0){
        if($user){
            if(password_verify($password, $user['password'])){
                $messages[] = 'Success';
                session_regenerate_id();
                $_SESSION['user_id'] = $user['id'];
                
            }else{
                $status = false;
                $messages[] = 'Password is incorrect!';
            }
        }
    }else{
        $status = false;
        $messages[] = 'Email not found!';
    }
    
    
}


echo json_encode(
    array(
        'status' => $status,
        'messages' => $messages,
       // 'session' => $_SESSION['user_id'] ?? NULL
    )
);

$connectDatabase->close_connection();
