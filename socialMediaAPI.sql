-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2023 at 12:24 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socialMediaAPI`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Follow`
--

CREATE TABLE `Follow` (
  `id` int(11) NOT NULL,
  `followerId` int(11) NOT NULL,
  `followedId` int(11) NOT NULL,
  `createtAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `picture` varchar(300) DEFAULT NULL,
  `createtAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `socialAccounts`
--

CREATE TABLE `socialAccounts` (
  `userId` int(11) NOT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `linkedIn` varchar(100) DEFAULT NULL,
  `ig` varchar(100) DEFAULT NULL,
  `twiter` varchar(100) DEFAULT NULL,
  `pinterRest` varchar(100) DEFAULT NULL,
  `website` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `storyPicture` varchar(200) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `createtAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `profilePicture` varchar(200) DEFAULT NULL,
  `coverPicture` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `createtAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `lastName`, `firstName`, `email`, `password`, `profilePicture`, `coverPicture`, `location`, `createtAt`) VALUES
(3, 'Joffrey1', 'nk', 'Joffrey', 'joy1@gmail.com', '$2a$10$7m6BWB4D9pbV1NQ7.MFuieIprp1TickFm2plFEZ31ZJxy6uou9tF2', NULL, NULL, NULL, '2023-03-17 11:54:29'),
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
  ADD KEY `userId` (`userId`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Follow`
--
ALTER TABLE `Follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
