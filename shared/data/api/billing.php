<?php
require_once '../../local_repository/session_cookies.cls.php';
require_once '../../partials/db_connect.php';

$connectDatabase = new ConnectDatabase();

$conn = $connectDatabase->connect_db();

$messages = array();
$isEmpty = array();
$status  = true;

$firstName = '';
$lastName = '';
$email = '';
$phone = '';
$gender = '';
$dateOfBirth = '';
$userId = '';

# sending user info data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $gender = $data['gender'];
    $dateOfBirth = $data['dateOfBirth'];
    $houseNumber = $data['houseNumber'];
    $zipCode = $data['zipCode'];
    $state = $data['state'];
    $city = $data['city'];
    $country = $data['country'];
    $creditCardNumber = $data['creditCardNumber'];
    $expiryDate = $data['expiryDate'];
    $cvv = $data['cvv'];
    $billingZipCode = $data['billingZipCode'];
    $accHolderFirstName = $data['accHolderFirstName'];
    $accHolderLastName = $data['accHolderLastName'];
    $accNumber = $data['accNumber'];
    $accRoutingNumber = $data['accRoutingNumber'];
     $subscriptionId = $data['subscriptionId'];


    if (!isset($subscriptionId) || empty($subscriptionId)) {
        $status = false;
    }
    if (!isset($creditCardNumber) || empty($creditCardNumber)) {
        $status = false;
        $messages[] = 'Field cannot be empty!';
    }
    if (!isset($expiryDate) || empty($expiryDate)) {
        $status = false;
        $messages[] = 'Please select an expiry!';
    }
    if (!isset($cvv) || empty($cvv)) {
        $status = false;
        $messages[] = 'Field cannot be empty!';
    }
    if (!isset($billingZipCode) || empty($billingZipCode)) {
        $status = false;
        $messages[] = 'Field cannot be empty!';
    }
    if (!isset($accHolderFirstName) || empty($accHolderFirstName)) {
        $status = false;
        $messages[] = 'Name Field cannot be empty!';
    }
    if (!isset($accHolderLastName) || empty($accHolderLastName)) {
        $status = false;
        $messages[] = 'Name Field cannot be empty!';
    }
    if (!isset($accNumber) || empty($accNumber)) {
        $status = false;
        $messages[] = 'Please enter an account number!';
    }
    if (!isset($accRoutingNumber) || empty($accRoutingNumber)) {
        $status = false;
        $messages[] = 'Routing Number Field cannot be empty!';
    }


    if (!isset($firstName) || empty($firstName)) {
        $status = false;
        $messages[] = 'Name Field cannot be empty!';
    }

    if (!isset($lastName) || empty($lastName)) {
        $status = false;
        $messages[] = 'Name Field cannot be empty!';
    }
    if (!isset($houseNumber) || empty($houseNumber)) {
        $status = false;
        $messages[] = 'House Number cannot be empty!';
    }
    if (!isset($zipCode) || empty($zipCode)) {
        $status = false;
        $messages[] = 'Zip code Field is required!';
    }
    if (!isset($state) || empty($state)) {
        $status = false;
        $messages[] = 'State Field cannot be empty!';
    }
    if (!isset($city) || empty($city)) {
        $status = false;
        $messages[] = 'City Field cannot be empty!';
    }
    if (!isset($country) || empty($country)) {
        $status = false;
        $messages[] = 'Please choose a country!';
    }

    if (!isset($email) || empty($email)) {
        $status = false;
        $messages[] = 'User Email cannot be empty!';
    } else {
        $fetchEmail = "SELECT * FROM users where Email = '$email'";
        $check_email = mysqli_query($conn, $fetchEmail);
        if ($check_email) {
            $user = $check_email->fetch_assoc();
            $userId = $user['id'];
            $credential_id = $user['id'];
        } else {
            print_r('Failed to get Id');
        }
    }

    if (!isset($phone) || empty($phone)) {
        $status = false;
        $messages[] = 'Please provide a phone number!';
    }

    if (!isset($dateOfBirth) || empty($dateOfBirth)) {
        $status = false;
        $messages[] = 'Date Field cannot be empty!';
    }

    if (!isset($gender) || empty($gender)) {
        $status = false;
        $messages[] = 'Please select a gender!';
    }


    if ($status) {

        $fetchId = "SELECT id FROM users_info where credential_id = '$userId'";
        $check_id = mysqli_query($conn, $fetchId);

        if (mysqli_num_rows($check_id) > 0) {
            $fetchUserInfoQuery = "SELECT * FROM users_info WHERE credential_id = $userId";
            $userInfoResult = mysqli_query($conn, $fetchUserInfoQuery);
            $userInfo = $userInfoResult->fetch_assoc();
            if ($userInfo) {
                $userInfoId = $userInfo['id'];
                $insertAddressQuery = "INSERT INTO user_address(house_number, zip_code, state, city, country, user_info_id)
            VALUE ('$houseNumber', '$zipCode', '$state', '$city', '$country', '$userInfoId')";
              
              $addressResult = mysqli_query($conn, $insertAddressQuery);

                if ($addressResult) {
                    $status = true;
                    $message[] = 'Success, Address added';
                } else {
                    $status = false;
                    $message = 'Failed';
                }
            }
        } else {
            $insertDataQuery = "INSERT INTO users_info (credential_id, first_name, last_name, email, phone, date_of_birth, gender)
            VALUE ('$credential_id', '$firstName', '$lastName', '$email', '$phone', '$dateOfBirth', '$gender')";

            $result = mysqli_query($conn, $insertDataQuery);

            if ($result) {
                $status = true;
                $message[] = 'Success, Info added';
            } else {
                $status = false;
                $message = 'Failed';
            }

            $fetchUserInfoQuery = "SELECT * FROM users_info WHERE credential_id = $userId";
            $userInfoResult = mysqli_query($conn, $fetchUserInfoQuery);
            $userInfo = $userInfoResult->fetch_assoc();
            if ($userInfo) {
                $userInfoId = $userInfo['id'];
                $insertAddressQuery = "INSERT INTO user_address(house_number, zip_code, state, city, country, user_info_id)
                VALUE ('$houseNumber', '$zipCode', '$state', '$city', '$country', '$userInfoId')";
                $addressResult = mysqli_query($conn, $insertAddressQuery);
                if ($addressResult) {
                    $status = true;
                    $message[] = 'Success, Address added';
                } else {
                    $status = false;
                    $message = 'Failed';
                }
            }
        }


        $fetchUserAddressQuery = "SELECT * FROM user_address WHERE user_info_id = $userInfoId";
        $userAddressResult = mysqli_query($conn, $fetchUserAddressQuery);
        $userAddress = $userAddressResult->fetch_assoc();
        if ($userAddress) {
            $userAddressId = $userAddress['id'];

            $insertPaymentQuery = "INSERT INTO user_payment(users_address_id, credit_card_number, expiry, cvv, billing_zipcode,
            acc_holder_firstname, acc_holder_lastname, acc_number, acc_routing_number, subscription_id)
            VALUE ('$userAddressId', '$creditCardNumber', '$expiryDate', '$cvv', '$billingZipCode', '$accHolderFirstName',
            '$accHolderLastName', '$accNumber', '$accRoutingNumber', '$subscriptionId')";
            $userPayment = mysqli_query($conn, $insertPaymentQuery);
            if ($userPayment) {
                $status = true;
                $message[] = 'Success, payment added';
            } else {
                $status = false;
                $message = 'Failed';
            }
        }
    }
}


echo json_encode(
    array(
        'status' => $status,
        'messages' => $messages
    )
);

$connectDatabase->close_connection();
