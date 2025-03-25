CREATE TABLE tv_show (
    show_id INT PRIMARY KEY,
    title VARCHAR(255),
    seasons INT,
    release_date DATE
);

INSERT INTO tv_show (show_id, title, seasons, release_date)
VALUES
    (111, "Grey\'s Anatomy", 12, '2005-03-27'),
    (222, 'Arrow', 6, '2012-10-10'),
    (333, 'Parks and Recreation', 7, '2009-04-09');

SELECT * FROM tv_show;
