-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2023 at 06:30 PM
-- Server version: 8.0.32-0ubuntu0.22.04.2
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socialMediaApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `description` text COLLATE utf32_bin NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int NOT NULL,
  `postId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Follow`
--

CREATE TABLE `Follow` (
  `id` int NOT NULL,
  `followerId` int NOT NULL,
  `followedId` int NOT NULL,
  `followBack` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Dumping data for table `Follow`
--

INSERT INTO `Follow` (`id`, `followerId`, `followedId`, `followBack`) VALUES
(1, 8, 13, 0);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int NOT NULL,
  `description` text CHARACTER SET utf32 COLLATE utf32_bin,
  `picture` varchar(300) COLLATE utf32_bin DEFAULT NULL,
  `createtAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`id`, `description`, `picture`, `createtAt`, `userId`) VALUES
(1, 'An apple mobile which is nothing like apple', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', '2023-04-24 18:49:53', 8),
(2, 'An apple mobile which is nothing like apple', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', '2023-04-24 18:49:59', 8),
(3, 'An apple mobile which is nothing like apple', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', '2023-04-24 18:50:02', 8),
(4, 'An apple mobile which is nothing like apple', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', '2023-04-24 18:50:04', 8),
(5, 'An apple mobile which is nothing like apple', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', '2023-04-24 18:50:13', 8),
(6, 'An apple mobile which is nothing like apple', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', '2023-04-24 18:50:15', 8),
(7, 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', '2023-04-24 18:52:46', 13),
(8, 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', '2023-04-24 18:52:48', 13),
(9, 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', '2023-04-24 18:52:49', 13),
(10, 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', '2023-04-24 18:52:49', 13),
(11, 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', '2023-04-24 18:52:50', 13),
(12, 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', '2023-04-24 18:52:50', 13),
(13, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:30', 12),
(14, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:30', 12),
(15, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:39', 12),
(16, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:52', 12),
(17, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:52', 12),
(18, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:52', 12),
(19, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:52', 12),
(20, 'OPPO F19 is officially announced on April 2021.', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', '2023-04-24 20:42:52', 12);

-- --------------------------------------------------------

--
-- Table structure for table `socialAccounts`
--

CREATE TABLE `socialAccounts` (
  `userId` int NOT NULL,
  `facebook` varchar(100) COLLATE utf32_bin DEFAULT NULL,
  `linkedIn` varchar(100) COLLATE utf32_bin DEFAULT NULL,
  `ig` varchar(100) COLLATE utf32_bin DEFAULT NULL,
  `twiter` varchar(100) COLLATE utf32_bin DEFAULT NULL,
  `pinterRest` varchar(100) COLLATE utf32_bin DEFAULT NULL,
  `website` varchar(150) COLLATE utf32_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `storyPicture` varchar(200) COLLATE utf32_bin NOT NULL,
  `description` varchar(50) COLLATE utf32_bin DEFAULT NULL,
  `createtAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `userName` varchar(100) COLLATE utf32_bin NOT NULL,
  `lastName` varchar(100) COLLATE utf32_bin NOT NULL,
  `firstName` varchar(100) COLLATE utf32_bin NOT NULL,
  `email` varchar(100) COLLATE utf32_bin NOT NULL,
  `password` varchar(200) COLLATE utf32_bin NOT NULL,
  `profilePicture` varchar(200) COLLATE utf32_bin DEFAULT NULL,
  `coverPicture` varchar(200) COLLATE utf32_bin DEFAULT NULL,
  `location` varchar(200) COLLATE utf32_bin DEFAULT NULL,
  `createtAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `lastName`, `firstName`, `email`, `password`, `profilePicture`, `coverPicture`, `location`, `createtAt`) VALUES
(3, 'Joffrey1', 'nk', 'Joffrey', 'joy1@gmail.com', '$2a$10$7m6BWB4D9pbV1NQ7.MFuieIprp1TickFm2plFEZ31ZJxy6uou9tF2', 'http://localhost:3000/images/jess.jpg', NULL, NULL, '2023-03-17 11:54:29'),
(4, 'Joffrey2', 'nk', 'Joffrey', 'joy1@gmail.com', '$2a$10$stEGmb1Sp1ex5GBqCESl2eZQsqOTFam4H3yiF9Pg3kj3LtzIyNMWK', NULL, NULL, NULL, '2023-03-23 17:11:48'),
(5, 'joy1', 'NKESHIMANA', 'Joffrey', 'joy1@gmail.com', '$2a$10$nUKOTQyOsGGwB6cgM9YB6.A5D4CboFHI8UeryQejzTl5f12Czt35y', NULL, NULL, NULL, '2023-04-03 16:58:31'),
(6, 'joy2', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$CkWSycveXc6bSECdFnRah.pW/pSH5Q8FXNmiFJeYqr60ba0Ev6GD6', NULL, NULL, NULL, '2023-04-03 17:01:09'),
(7, 'joy3', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$sBRaV6zCaYMdHctdRiz/D.MadZ2JO4KHYLSqR6LXQ.OtqxbCkec2q', NULL, NULL, NULL, '2023-04-03 17:02:31'),
(8, 'joy4', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$.uxFRFXJYaboP1UgvI7uyerSW0zvPbw6h8ryiEm0Yxlcg6nsZ.ZLS', NULL, NULL, NULL, '2023-04-03 17:04:30'),
(9, 'joy5', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$N.v3oA6DOonqXe/PQojaMudgJDn.pc2x3AVgZRIgxeLvfuR274IZq', NULL, NULL, NULL, '2023-04-03 17:05:21'),
(10, 'joy6', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$yARsjLpqWDT3zsa3FAhXgO4WsvJcmx.An/LDiAmczBiWWOchn1dBK', NULL, NULL, NULL, '2023-04-03 17:16:05'),
(11, 'joy7', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$5qdx0pxOp9emx8V3vkAjU.u5zldVkrzKTFwCpIl1qDz/Fn.sRBFxK', NULL, NULL, NULL, '2023-04-03 17:17:35'),
(12, 'joy8', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$vMSU206Gjxrzpnn0d6yRdO61499/16wWVxVUsrZGScfnFzweVZaCO', NULL, NULL, NULL, '2023-04-03 17:18:00'),
(13, 'joy9', 'NKESHIMANA', 'Joffrey', 'joy2@gmail.com', '$2a$10$7xh6dTKHag/V9JZb5.fqQeYFmVaZmNIgpNemwt256hl4GvdVz7Rvq', NULL, NULL, NULL, '2023-04-03 17:18:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`,`postId`),
  ADD KEY `postCommented` (`postId`);

--
-- Indexes for table `Follow`
--
ALTER TABLE `Follow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `followId` (`followerId`,`followedId`),
  ADD KEY `followed` (`followedId`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`,`postId`),
  ADD KEY `postliked` (`postId`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `userId_2` (`userId`);

--
-- Indexes for table `socialAccounts`
--
ALTER TABLE `socialAccounts`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId` (`userId`);

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`,`userName`,`email`),
  ADD UNIQUE KEY `userName` (`userName`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Follow`
--
ALTER TABLE `Follow`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `commenter` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postCommented` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Follow`
--
ALTER TABLE `Follow`
  ADD CONSTRAINT `followed` FOREIGN KEY (`followedId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follower` FOREIGN KEY (`followerId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `postliked` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userliked` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `poster` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `socialAccounts`
--
ALTER TABLE `socialAccounts`
  ADD CONSTRAINT `DetailsInfo` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stories`
--
ALTER TABLE `stories`
  ADD CONSTRAINT `kfUserStories` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
