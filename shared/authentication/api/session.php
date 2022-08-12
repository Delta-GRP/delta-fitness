<?php

require_once '../../local_repository/session_cookies.cls.php';

$sessionCookies = new SessionCookies();

$sessionCookies->startSection();

$message = array();
$status = true;


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
    )
);