-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2019 at 01:25 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maintenance`
--

-- --------------------------------------------------------

--
-- Table structure for table `checkitems`
--

CREATE TABLE `checkitems` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Unit_of_measure` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `checklist`
--

CREATE TABLE `checklist` (
  `ID` int(11) NOT NULL,
  `Machine_ID` int(11) NOT NULL,
  `Item_ID` int(11) NOT NULL,
  `Date_Time` datetime NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Checked` tinyint(1) NOT NULL,
  `Value` float DEFAULT NULL,
  `Note` text NOT NULL,
  `Failure_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `checklist_templates`
--

CREATE TABLE `checklist_templates` (
  `Machine_ID` int(11) NOT NULL,
  `Item_ID` int(11) NOT NULL,
  `List_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `failure`
--

CREATE TABLE `failure` (
  `ID` int(11) NOT NULL,
  `Note` text NOT NULL,
  `Picture_link` varchar(255) NOT NULL,
  `Date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `machine`
--

CREATE TABLE `machine` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `Ime` varchar(50) NOT NULL,
  `Prezime` varchar(50) NOT NULL,
  `UserName` varchar(20) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `ResetToken` text NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checkitems`
--
ALTER TABLE `checkitems`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `checklist`
--
ALTER TABLE `checklist`
  ADD PRIMARY KEY (`ID`,`Machine_ID`,`Item_ID`,`User_ID`,`Failure_ID`),
  ADD KEY `User_ID` (`User_ID`),
  ADD KEY `Failure_ID` (`Failure_ID`),
  ADD KEY `Machine_ID` (`Machine_ID`),
  ADD KEY `Item_ID` (`Item_ID`);

--
-- Indexes for table `checklist_templates`
--
ALTER TABLE `checklist_templates`
  ADD PRIMARY KEY (`Machine_ID`,`Item_ID`,`List_ID`),
  ADD KEY `Item_ID` (`Item_ID`);

--
-- Indexes for table `failure`
--
ALTER TABLE `failure`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `machine`
--
ALTER TABLE `machine`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checkitems`
--
ALTER TABLE `checkitems`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `checklist`
--
ALTER TABLE `checklist`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failure`
--
ALTER TABLE `failure`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `machine`
--
ALTER TABLE `machine`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `checklist`
--
ALTER TABLE `checklist`
  ADD CONSTRAINT `checklist_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `checklist_ibfk_2` FOREIGN KEY (`Failure_ID`) REFERENCES `failure` (`ID`),
  ADD CONSTRAINT `checklist_ibfk_3` FOREIGN KEY (`Machine_ID`) REFERENCES `machine` (`ID`),
  ADD CONSTRAINT `checklist_ibfk_4` FOREIGN KEY (`Item_ID`) REFERENCES `checkitems` (`ID`);

--
-- Constraints for table `checklist_templates`
--
ALTER TABLE `checklist_templates`
  ADD CONSTRAINT `checklist_templates_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `checkitems` (`ID`),
  ADD CONSTRAINT `checklist_templates_ibfk_2` FOREIGN KEY (`Machine_ID`) REFERENCES `machine` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
