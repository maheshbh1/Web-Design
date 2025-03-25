Select * from student
where gpa > 3;

SELECT COUNT(*) 
FROM student 
WHERE gpa > 3;

SELECT MIN(gpa)
FROM student;

SELECT AVG(gpa)
FROM student;

Select * from student;

SELECT state, COUNT(*)
FROM student 
GROUP BY state 
ORDER BY COUNT(*);

