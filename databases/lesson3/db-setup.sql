drop DATABASE databases_lesson3;


CREATE DATABASE databases_lesson3
    DEFAULT CHARACTER SET = 'utf8mb4';

USE databases_lesson3;

SET NAMES utf8mb4;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` TEXT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of-guests` INT NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phonenumber` varchar(50) NULL,
  `contact_name` varchar(255) NULL,
  `contact_email` varchar(100) NULL,
  CONSTRAINT `fk_reservation_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` TEXT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `stars` TINYINT NOT NULL,
  `created_date` DATE NOT NULL,
  CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Meals
insert into meal values (1, 'Spaghetti', 'Simple spaghetti dish with tomatoes', 'Oresund Road 4 TH', '2023-10-15 18:00:00', 5, 80, '2023-10-09');
insert into meal values (2, 'Pizza', 'Potato pizza with organic flour', 'Main Street 5th', '2023-10-10 18:00:00', 8, 110, '2023-09-28');
insert into meal values (3, 'Soup', 'Spicy soup', 'Street Kitchen', '2023-11-15 18:00:00', 30, 45, '2023-11-09');


-- Reservations
insert into reservation values (1, 1, 1, '2023-10-11', '22 45 87 12', 'Mia McDonald', null);
insert into reservation values (2, 5, 3, '2023-10-11', '911', 'Batman', null);
insert into reservation values (3, 2, 3, '2023-10-02', '+45 18181919', 'Peter Parker', 'spiderboi@email.com');
insert into reservation values (4, 2, 3, '2023-11-11', null, 'Ghost', 'spooky@gmail.com');


-- Reviews
insert into review values (1, 'Great soup', 'The soup was great, I will definitely come back!', 1, 5, '2023-10-11');
insert into review values (2, 'Terrible pizza', 'It had no topping', 2, 1, '2023-09-02');
insert into review values (3, 'Yummy', 'Very delicious', 1, 4, '2023-10-13');