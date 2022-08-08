<?php

require_once '../../local_repository/session_cookies.cls.php';

$sessionCookies = new SessionCookies();

$message = array();
$status = true;

$sessionCookies->startSection();

session_destroy();

if(!isset($_SESSION['user-id'])){
    $status = true;
    $message[] = 'User logged out';
}else{
    $status = false;
    $message[] = 'Failed to logout user';
}

echo json_encode(
  array(
    'message' => $message,
    'status' => $status
  )
);


//header('Location : ../../../delta/landing-page/index.html');

//exit();