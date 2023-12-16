
USE databases_lesson3;

--------------------------------------------------------------------------
---------------------------------  MEAL  ---------------------------------
--------------------------------------------------------------------------

-- 3.1 Get all the meals
SELECt * 
FROM meal;

-- 3.2 Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Burger', 'Delicious burger', 'Street Kitchen', '2023-10-15 18:00:00', 4, 100, NOW());

-- 3.3 Get a meal with any id, fx 1
SELECt * 
FROM meal
WHERE id = 2;

-- 3.4 Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
set max_reservations = 8, price = 120
WHERE id = 2;

-- 3.5 Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 4;




--------------------------------------------------------------------------
----------------------------  RESERVATION  -------------------------------
--------------------------------------------------------------------------

-- 3.6 Get all reservations
SELECt * 
FROM reservation;

-- 3.7 Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (8, 2, NOW(), '911', 'Mr Bond', null);

-- 3.8 Get a reservation with any id, fx 1
SELECt * 
FROM reservation
WHERE id = 1;

-- 3.9 Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
set contact_phonenumber = '55 66 77 88', contact_email = 'fake_email@gmail.com'
WHERE id = 2;

-- 3.10 Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 5;



--------------------------------------------------------------------------
------------------------------  REVIEW  ----------------------------------
--------------------------------------------------------------------------

-- 3.11 Get all reviews
SELECt * 
FROM review;

-- 3.12 Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Meh food', 'it was okay!', 2, 3, NOW());

-- 3.13 Get a review with any id, fx 1
SELECt * 
FROM review
WHERE id = 1;

-- 3.14 Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
set title = 'Updated title', description = 'Updated description'
WHERE id = 2;

-- 3.15 Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 4;


--------------------------------------------------------------------------
-------------------------  ADDITIONAL QUERIES  ---------------------------
--------------------------------------------------------------------------

-- 3.15 Get meals that has a price smaller than a specific price fx 90
SELECT * 
FROM meal
WHERE price < 90;

-- 3.16 Get meals that still has available reservations
SELECT meal.id, meal.title, meal.max_reservations, SUM(reservation.number_of_guests) AS total_reservations
FROM meal
LEFT JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal.id
HAVING meal.max_reservations > COALESCE(total_reservations, 0);

-- 3.17 Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * 
FROM meal
WHERE title LIKE '%ghet%';

-- 3.18 Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2023-10-01' AND '2023-10-31';

-- 3.19 Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 2;

-- 3.20 Get the meals that have good reviews
SELECT meal.*
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3
GROUP BY meal.id;

-- 3.21 Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
WHERE meal_id = 3
ORDER BY created_date;

-- 3.22 Sort all meals by average number of stars in the reviews
SELECT meal.*, AVG(review.stars) AS average_stars
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average_stars DESC;