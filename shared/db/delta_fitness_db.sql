-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2022 at 03:37 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delta_fitness_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `name`, `level`) VALUES
(1, 'Free Equipment', 100),
(2, 'All Day Free Training', 100),
(3, 'Personal Coach', 100),
(4, '24/7 Skilled Support', 200),
(5, 'Free restroom', 300);

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `name`, `price`, `isActive`) VALUES
(1, 'standard', 98, 1),
(2, 'premium', 199, 1),
(3, 'express', 295, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subscription_offer`
--

CREATE TABLE `subscription_offer` (
  `id` int(100) NOT NULL,
  `subscription_id` int(100) NOT NULL,
  `offers_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscription_offer`
--

INSERT INTO `subscription_offer` (`id`, `subscription_id`, `offers_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 2, 4),
(8, 3, 1),
(9, 3, 2),
(10, 3, 3),
(11, 3, 4),
(12, 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `createdAt`) VALUES
(1, 'App', 'Test', 'apptest@gmail.com', '$2y$10$SAFw9kLMGvTV4UMq6hGOmekLUYzNMDszvRNg9JprDacI3GP0JboWC', '2022-08-10 02:25:03'),
(2, 'Jane', 'Doe', 'janedoe@gmail.com', '$2y$10$RQp4Bco1m5NFYDrszZP5pOzSIsWeptM3ZSFcSfIf3bist6BLSYk3K', '2022-08-10 02:25:03'),
(8, 'Efya', 'Doe', 'efyadoe@gmail.com', '$2y$10$dUAYboXR08E0Gsknzzy0puess8q1ob3CFErFA0./bblV9LP069CtK', '2022-08-10 02:25:03'),
(9, 'Jully', 'Austin', 'jullyaustin27@gmail.com', '$2y$10$OmppCy10qbSZ5tTeZNyUfed59.CaxUCWWBusw/Baq79nocO/6M.XS', '2022-08-10 02:25:03'),
(10, 'Adom', 'Herbal ', 'adom@gmail.com', '$2y$10$pin7bgJsQecxwlGNL/rmGu8sKPeWibOk.2NrONKH6SpfJ8KJV0aRy', '2022-08-10 02:25:03');

-- --------------------------------------------------------

--
-- Table structure for table `users_info`
--

CREATE TABLE `users_info` (
  `id` int(11) NOT NULL,
  `credential_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_info`
--

INSERT INTO `users_info` (`id`, `credential_id`, `first_name`, `last_name`, `email`, `phone`, `date_of_birth`, `gender`, `createdAt`) VALUES
(1, 8, 'Able', 'Ampah', 'efyadoe@gmail.com', '054221147', '21/11/2005', 'female', '2022-08-10 02:26:37'),
(5, 9, 'Jully', 'Austin', 'jullyaustin27@gmail.com', '0242789954', '28/12/2000', 'male', '2022-08-10 02:31:37'),
(6, 2, 'Jane', 'Doe', 'janedoe@gmail.com', '0542215548', '2022-08-17', 'female', '2022-08-10 18:18:10');

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE `user_address` (
  `id` int(11) NOT NULL,
  `house_number` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `user_info_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (`id`, `house_number`, `zip_code`, `state`, `city`, `country`, `user_info_id`, `createdAt`) VALUES
(1, 'HN 244/3', '00233', 'Greater Accra', 'Accra', 'Ghana', 1, '2022-08-10 02:27:03'),
(4, 'KN 104/3', '00233', 'Greater Accra', 'Accra', 'Ghana', 5, '2022-08-10 02:31:37'),
(5, '45th Street 900/3', '00233', 'Greater Accra', 'Accra', 'Ghana', 5, '2022-08-10 13:54:36'),
(6, 'KE 355/4', '00233', 'Greater Accra', 'Accra', 'Ghana', 6, '2022-08-10 18:18:10'),
(7, 'LE k55/5', '00233', 'NY', 'BRONX', 'Ghana', 5, '2022-08-11 20:12:28'),
(8, 'LE k55/5', '00233', 'NY', 'BRONX', 'Ghana', 5, '2022-08-11 20:18:36'),
(9, 'LE k55/5', '00233', 'NY', 'BRONX', 'Ghana', 5, '2022-08-11 20:21:01'),
(10, 'LE k55/5', '00233', 'NY', 'BRONX', 'Ghana', 5, '2022-08-11 21:03:04');

-- --------------------------------------------------------

--
-- Table structure for table `user_payment`
--

CREATE TABLE `user_payment` (
  `id` int(11) NOT NULL,
  `users_address_id` int(11) DEFAULT NULL,
  `credit_card_number` varchar(255) DEFAULT NULL,
  `expiry` varchar(255) DEFAULT NULL,
  `cvv` varchar(255) DEFAULT NULL,
  `billing_zipcode` varchar(255) DEFAULT NULL,
  `acc_holder_firstname` varchar(255) DEFAULT NULL,
  `acc_holder_lastname` varchar(255) DEFAULT NULL,
  `acc_number` varchar(255) DEFAULT NULL,
  `acc_routing_number` varchar(255) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `total` float NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_payment`
--

INSERT INTO `user_payment` (`id`, `users_address_id`, `credit_card_number`, `expiry`, `cvv`, `billing_zipcode`, `acc_holder_firstname`, `acc_holder_lastname`, `acc_number`, `acc_routing_number`, `subscription_id`, `total`, `createdAt`) VALUES
(1, 1, '421547895542', '10/09/2022', '4777885554', '00233', 'Able', 'Ampah', '12345678954', '1425', 2, 0, '2022-08-10 02:27:39'),
(2, 4, '784575123645', '24/08/2022', '478566547558', '00233', 'Jully', 'Austin', '907485902315', '111111', 1, 0, '2022-08-10 02:31:37'),
(3, 4, '784575123645', '24/08/2022', '478566547558', '00233', 'Jully', 'Austin', '907485902315', '111111', 3, 0, '2022-08-10 13:54:36'),
(4, 6, '45778899564', '2022-09-14', '022455', '00233', 'Jane', 'Doe', '4577889956', '110011442', 1, 0, '2022-08-10 18:18:10'),
(5, 4, '45679888555', '2022-08-23', '11224', '00233', 'Julius', 'Austin', '1144587996', '45789654', 1, 0, '2022-08-11 21:03:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription_offer`
--
ALTER TABLE `subscription_offer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_info`
--
ALTER TABLE `users_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_payment`
--
ALTER TABLE `user_payment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscription_offer`
--
ALTER TABLE `subscription_offer`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users_info`
--
ALTER TABLE `users_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_address`
--
ALTER TABLE `user_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_payment`
--
ALTER TABLE `user_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
