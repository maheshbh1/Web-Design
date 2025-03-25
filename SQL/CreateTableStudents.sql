DROP table if exists student; 
CREATE TABLE student (
    stu_id      INTEGER PRIMARY KEY,
    last_name   VARCHAR(50),
    first_name  VARCHAR(50),
    state       VARchar(2),
    birth_date  DATE,
    gpa         DECIMAL(2,1)
);

