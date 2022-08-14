<?php
include_once '../../partials/db_connect.php';
include_once '../../local_repository/session_cookies.cls.php';

$sessionCookies = new SessionCookies();

$sessionCookies->startSection();

header('Content-type: application/json');

$connectDatabase = new ConnectDatabase();

$conn = $connectDatabase->connect_db();

$status = true;
$hasParams = false;
$message = array();
$userSubscriptions = array();


if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $fetchSubscriptionQuery = "SELECT * FROM subscription"; 
    $res = mysqli_query($conn, $fetchSubscriptionQuery);
    while($subscriptions = mysqli_fetch_assoc($res)){
      $userSubscriptions[] = $subscriptions;
    }
  
    echo json_encode(
            $userSubscriptions,  
    );
}else{
  $message[] = "You need to sign in to continue";
  echo json_encode($message);
}


$connectDatabase->close_connection();
