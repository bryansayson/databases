CREATE DATABASE chat;

USE chat;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Message'
-- 
-- ---

DROP TABLE IF EXISTS `Message`;
		
CREATE TABLE `Message` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `room` VARCHAR(255) NULL DEFAULT NULL,
  `text` VARCHAR(255) NULL DEFAULT '',
  `author` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

