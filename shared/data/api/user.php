<?php
include_once '../../partials/db_connect.php';
include_once '../../local_repository/session_cookies.cls.php';

$sessionCookies = new SessionCookies();
$sessionCookies->startSection();

header('Content-type: application/json');

$connectDatabase = new ConnectDatabase();

$conn = $connectDatabase->connect_db();

$status = true;
$message = array();
$user = array();
$user_credentials = array();

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $fetchCredentialQuery = "SELECT id, email, first_name, last_name FROM users WHERE id = $user_id";
    $res = mysqli_query($conn, $fetchCredentialQuery);
    if (mysqli_num_rows($res) > 0) {
        $user_credential = $res->fetch_assoc();
        if ($user_credential) {
            $status = true;
            $message[] = 'success';
            $user_credentials[] = $user_credential;
        }
    } else {
        $status = false;
        $message = 'No user found';
    }
    echo json_encode(
        $user_credentials,
    );
}else{
    echo json_encode(
        "Please sign in to continue."
    );
}




$connectDatabase->close_connection();
