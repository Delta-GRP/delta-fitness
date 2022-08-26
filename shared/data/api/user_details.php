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


if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $fetchUserQuery = "SELECT * FROM users_info WHERE credential_id = $user_id";
    $result = mysqli_query($conn, $fetchUserQuery);
    if (mysqli_num_rows($result) > 0) {
        $user_details = $result->fetch_assoc();
        if ($user_details) {
            $status = true;
            $message[] = 'success';
            $user[] = $user_details;
        }
    }
} else {
    $status = false;
    $message = 'You need to sign in to continue';
    echo json_encode($message);
}


echo json_encode($user);


$connectDatabase->close_connection();
