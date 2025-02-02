USE databases_lesson2;

# 3.1 Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

# 3.2 Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

# 3.3 Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.*
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND month(task.created) = 9;

# 3.4 Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTHNAME(created) as month, COUNT(*)
FROM task
GROUP BY month;


