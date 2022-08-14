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
$userPayment = array();


if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $fetchPaymentQuery = "SELECT * FROM user_payment"; 
    $res = mysqli_query($conn, $fetchPaymentQuery);
    while($payment = mysqli_fetch_assoc($res)){
      $userPayment[] = $payment;
    }
  
    echo json_encode(
            $userPayment,  
    );
}else{
  $message[] = "You need to sign in to continue";
  echo json_encode($message);
}


$connectDatabase->close_connection();
