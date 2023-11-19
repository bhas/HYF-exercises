USE databases_lesson2;

# 1.1 Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('Inserted task', 'Sample description', NOW(), NOW(), '2023-12-01 10:00', 1);
-- INSERT INTO user_task (user_id, task_id)
-- VALUES (8, SELECT LAST_INSERT_ID());

# 1.2 Change the title of a task
UPDATE task
SET title = 'Inserted task v2'
WHERE title LIKE 'Inserted task%';

# 1.3 Change a task due date
UPDATE task
SET due_date = NOW()
WHERE title LIKE 'Inserted task%';

# 1.4 Change a task status
UPDATE task
SET status_id = 2
WHERE title LIKE 'Inserted task%';

# 1.5 Mark a task as complete
UPDATE task
SET status_id = (SELECT id FROM status WHERE name = "Done")
WHERE title LIKE 'Inserted task%';

# 1.6 Delete a task
DELETE FROM task
WHERE title LIKE 'Inserted task%';