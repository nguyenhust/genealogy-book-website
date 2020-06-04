-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2020 at 04:57 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gia_pha2`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--
CREATE DATABASE  gia_pha;

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `level` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `level`) VALUES
(1, 'admin', 'giaphaonline', 1),
(2, 'Tuan', '1234', 0),
(4, 'Hung123', '12345', 0),
(5, 'Hung', '12345', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_family`
--

CREATE TABLE `user_family` (
  `id` int(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `family` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `family_data` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_family`
--

INSERT INTO `user_family` (`id`, `user_id`, `family`, `family_data`) VALUES
(33, 4, 'Tree', '[[0,\"Hung\",0,1,2,[],[],\"0000\",\"0000\",\"\"],[1,\"Canh\",0,3,4,[2],[0,9],\"0000\",\"0000\",\"\"],[2,\"Tam\",1,null,null,[1],[0],\"0000\",\"0000\",\"\"],[3,\"Tan\",0,null,null,[4],[1,5,6,19,24,30],\"0000\",\"0000\",\"\"],[4,\"Thin\",1,null,null,[3],[5,6,1,19,24,30],\"0000\",\"0000\",\"\"],[5,\"Thanh\",0,3,4,[10],[11,12,13],\"0000\",\"0000\",\"\"],[6,\"Yen\",1,3,4,[7],[8],\"0000\",\"0000\",\"\"],[7,\"Co\",0,null,null,[6],[8],\"0000\",\"0000\",\"\"],[8,\"Thuy\",1,7,6,[15],[14],\"0000\",\"0000\",\"\"],[9,\"Tuan\",0,1,null,[],[],\"0000\",\"0000\",\"\"],[10,\"Dao\",1,null,null,[5],[11,12,13],\"0000\",\"0000\",\"\"],[11,\"Sao\",0,5,10,[],[],\"0000\",\"0000\",\"\"],[12,\"Nguyet\",1,5,10,[17],[],\"0000\",\"0000\",\"\"],[13,\"Quynh\",1,5,10,[],[],\"0000\",\"0000\",\"\"],[14,\"Thang\",0,15,8,[27],[16],\"0000\",\"0000\",\"\"],[15,\"Huy\",0,null,null,[8],[14],\"0000\",\"0000\",\"\"],[16,\"Minh\",0,14,null,[],[],\"0000\",\"0000\",\"\"],[17,\"Thu\",0,null,null,[12],[],\"0000\",\"0000\",\"\"],null,[19,\"Mai\",0,3,4,[20],[21,22],\"0000\",\"0000\",\"\"],[20,\"Thang\",1,null,null,[19],[21,22],\"0000\",\"0000\",\"\"],[21,\"Dat\",0,19,20,[],[],\"0000\",\"0000\",\"\"],[22,\"Huong\",1,19,20,[],[],\"0000\",\"0000\",\"\"],null,[24,\"Phuong\",1,3,4,[25],[26],\"0000\",\"0000\",\"\"],[25,\"Dang\",0,null,null,[24],[26],\"0000\",\"0000\",\"\"],[26,\"Thi\",0,25,24,[],[],\"0000\",\"0000\",\"\"],[27,\"Ha\",1,null,null,[14],[],\"0000\",\"0000\",\"\"],null,null,[30,\"Hien\",0,3,4,[],[],\"0000\",\"0000\",\"\"],null,null]'),
(40, 5, 'Peter Family', '[[0,\"Peter\",0,null,null,[1],[2,3,9],\"0000\",\"0000\",\"\"],[1,\"Jessica\",1,null,null,[0],[2,3,9],\"0000\",\"0000\",\"\"],[2,\"Ron\",0,0,1,[],[],\"0000\",\"0000\",\"\"],[3,\"Sheila\",1,0,1,[4],[5,7],\"0000\",\"0000\",\"\"],[4,\"David\",0,null,null,[3],[5,7],\"0000\",\"0000\",\"\"],[5,\"Steven\",0,4,3,[6],[15,18],\"0000\",\"0000\",\"\"],[6,\"Sandra\",1,null,null,[5],[15,18],\"0000\",\"0000\",\"\"],[7,\"Cynthia\",1,4,3,[8],[16,17],\"0000\",\"0000\",\"\"],[8,\"Donald\",0,null,null,[7],[16,17],\"0000\",\"0000\",\"\"],[9,\"Robert\",0,0,1,[10],[11],\"0000\",\"0000\",\"\"],[10,\"Eva\",1,null,null,[9],[11],\"0000\",\"0000\",\"\"],[11,\"Francisco\",0,9,10,[12],[13,14],\"0000\",\"0000\",\"\"],[12,\"Amanda\",1,null,null,[11],[13,14],\"0000\",\"0000\",\"\"],[13,\"Zula\",1,11,12,[],[],\"0000\",\"0000\",\"\"],[14,\"Clever\",0,11,12,[],[],\"0000\",\"0000\",\"\"],[15,\"Pedro\",0,5,6,[],[],\"0000\",\"0000\",\"\"],[16,\"Lula\",1,8,7,[],[],\"0000\",\"0000\",\"\"],[17,\"Mark\",0,8,7,[25],[26,27],\"0000\",\"0000\",\"\"],[18,\"Richard\",0,5,6,[19],[20,23,24],\"0000\",\"0000\",\"\"],[19,\"Helen\",1,null,null,[18],[20,23,24],\"0000\",\"0000\",\"\"],[20,\"John\",0,18,19,[22],[21],\"0000\",\"0000\",\"\"],[21,\"Ruth\",1,20,22,[],[],\"0000\",\"0000\",\"\"],[22,\"Ethel\",1,null,null,[20],[21],\"0000\",\"0000\",\"\"],[23,\"Scott\",0,18,19,[],[],\"0000\",\"0000\",\"\"],[24,\"Amber\",1,18,19,[],[],\"0000\",\"0000\",\"\"],[25,\"Doris\",1,null,null,[17],[26,27],\"0000\",\"0000\",\"\"],[26,\"Donna\",1,17,25,[],[],\"0000\",\"0000\",\"\"],[27,\"Aaron\",0,17,25,[28],[29],\"0000\",\"0000\",\"\"],[28,\"Louise\",1,null,null,[27],[29],\"0000\",\"0000\",\"\"],[29,\"Karen\",1,27,28,[30],[31],\"0000\",\"0000\",\"\"],[30,\"Jose\",0,null,null,[29],[31],\"0000\",\"0000\",\"\"],[31,\"Emily\",1,30,29,[],[],\"0000\",\"0000\",\"\"]]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user_family`
--
ALTER TABLE `user_family`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_family`
--
ALTER TABLE `user_family`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
