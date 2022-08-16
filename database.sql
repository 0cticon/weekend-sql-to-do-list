CREATE TABLE tasks(
    "id" SERIAL PRIMARY KEY,
    "task" varchar(256),
    "completed" boolean DEFAULT false
);
INSERT INTO tasks( task ) VALUES ( 'Wash the car' );
SELECT * FROM tasks ORDER BY id ASC;
UPDATE tasks SET completed=true WHERE id=1;
