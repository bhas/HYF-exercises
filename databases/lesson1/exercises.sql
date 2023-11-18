USE databases_lesson1;

select * from user

select * from status

select * from task

# 1 Select the names and phones of all users
SELECT name, phone 
FROM user;

# 2 Select the name of the user with id=10
SELECT name 
FROM user
WHERE id = 10;

# 3 Find how many users exist in the database
SELECT COUNT(*) 
FROM user;

# 4 Select the names of the first 5 users in the database
SELECT name 
FROM user
LIMIT 5;

# 5 Select the names of the last 3 users in the database
SELECT name 
FROM user
ORDER BY id DESC
LIMIT 3;

# 6 Sum all the ids in the user table
SELECT SUM(id) 
FROM user;

# 7 Select all users and order them alphabetically by name
SELECT *
FROM user
ORDER BY name ASC;

# 8 Find all tasks that include SQL either on the title or on the description
SELECT *
FROM task
WHERE title LIKE '%SQL%' or description LIKE '%SQL%';

# 9 Find the title of all tasks that the user Maryrose is responsible for
SELECT task.title
FROM user
INNER JOIN task on task.user_id = user.id
WHERE user.name LIKE 'Maryrose%';

# 10 Find how many tasks each user is responsible for
SELECT user.name, COUNT(*) as task_count
FROM user
INNER JOIN task on task.user_id = user.id
GROUP BY user.id;

# 11 Find how many tasks with a status=Done each user is responsible for
SELECT user.name, COUNT(*) as task_count
FROM user
INNER JOIN task on task.user_id = user.id
INNER JOIN status on task.status_id = status.id
WHERE status.name = 'Done'
GROUP BY user.id;




