SELECT * 
FROM tv_show ;

SELECT release_date 
FROM tv_show 
WHERE title = 'Arrow';

SELECT * 
FROM tv_show 
WHERE seasons <= 10 AND seasons >= 6;

SELECT * 
FROM tv_show 
WHERE seasons = 6 OR release_date > '2013-01-01';

SELECT title FROM tv_show 
WHERE title LIKE '%row';

SELECT title, seasons 
FROM tv_show 
order by title;

SELECT title, seasons 
FROM tv_show 
order by seasons;

SELECT title, seasons 
FROM tv_show 
order by release_date;