-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 25, 2019 at 05:21 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartpakinggame`
--

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) NOT NULL,
  `Surname` varchar(200) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `Score` varchar(200) NOT NULL,
  `NumberLooses` int(11) NOT NULL,
  `Points` int(11) NOT NULL, -- New column added
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Insert users into the scores table
INSERT INTO `scores` (`Name`, `Surname`, `Email`, `Score`, `NumberLooses`, `Points`) VALUES
('Styliana', 'Zymara', 'stylianaz03@gmail.com', 'Gold', 0, 468),
('Christos', 'Zymara', 'christosz@gmail.com', 'Silver', 0, 424),
('Anthi', 'Georgiou', 'anthig74@gmail.com', 'Bronze', 0, 284),
('Tom', 'Brown', 'tombrown@gmail.com', 'NoReward', 0, 100);


COMMIT;
