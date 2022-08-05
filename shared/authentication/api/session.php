<?php

ini_set('session.cookie_lifetime', 60 * 60 * 24 * 7);
ini_set('session.gc_maxlifetime', 60 * 60 * 24 * 7);
ini_set('session.save_path', 'C:\xampp\htdocs\session');
session_start();

$message = array();
$status = true;
//session_start();

if(isset($_SESSION["user_id"])){
    $message[] = 'Authorized user';
    $status = true;
}else{
    $message[] = 'Unauthorize user';
    $status = false;
}

echo json_encode(
    array(
        "messages" => $message,
        "status" => $status,
        "session" => $_SESSION['user_id'] ?? NULL
    )
);