# 2.1 Create a new database containing the following tables:
# Class: with the columns: id, name, begins (date), ends (date)
# Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE DATABASE databases_lesson2_part2
    DEFAULT CHARACTER SET = 'utf8mb4';

USE databases_lesson2_part2;

SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NULL DEFAULT NULL,
  `ends` DATETIME NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL DEFAULT NULL,
  `class_id` int(10) unsigned,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


# 2.2 Create an index on the name column of the student table
CREATE INDEX name_idx ON student (name);

# 2.3 Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations)
ALTER TABLE class   
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;