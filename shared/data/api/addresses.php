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
$user = array();
$user_address = array();


if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $fetchAddressQuery = "SELECT * FROM user_address"; 
    $res = mysqli_query($conn, $fetchAddressQuery);
    while($address = mysqli_fetch_assoc($res)){
      $user_address[] = $address;
    }
  
    echo json_encode(
            $user_address,  
    );
}else{
  $message[] = "You need to sign in to continue";
  echo json_encode($message);
}


$connectDatabase->close_connection();
