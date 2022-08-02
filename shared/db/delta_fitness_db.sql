-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2022 at 03:35 AM
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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'App', 'Test', 'apptest@gmail.com', '$2y$10$SAFw9kLMGvTV4UMq6hGOmekLUYzNMDszvRNg9JprDacI3GP0JboWC'),
(2, 'Jane', 'Doe', 'janedoe@gmail.com', '$2y$10$RQp4Bco1m5NFYDrszZP5pOzSIsWeptM3ZSFcSfIf3bist6BLSYk3K'),
(3, 'Jane', 'Doe', 'janedoe@gmail.com', '$2y$10$2OY7MjI/iZgzKbCbrGL1PuUqvnYycyJGJPcH/F5UMoqP2ZxmEkgf.'),
(4, 'Jane', 'Doe', 'janedoe@gmail.com', '$2y$10$q0/1Wx6Q0wypOgq/nalcBORjebGGe8nyPcrjBaigXBNwq2BZfG5/O'),
(5, 'Efya', 'Doe', 'efyadoe@gmail.com', '$2y$10$dUAYboXR08E0Gsknzzy0puess8q1ob3CFErFA0./bblV9LP069CtK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
