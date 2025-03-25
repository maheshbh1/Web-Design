CREATE TABLE movie (
  id INTEGER,
  title VARCHAR(100),
  rating VARCHAR(5),
  release_date DATE
);

INSERT INTO movie VALUES
  (1, 'Rogue One: A Star Wars Story', 'PG-13', '2016-12-10'),
  (2, 'Hidden Figures', 'PG', '2017-01-06'),
  (3, 'Toy Story', 'G', '1995-11-22'),
  (4, 'Avengers: Endgame', 'PG-13', '2019-04-26'),
  (5, 'The Godfather', 'R', '1972-03-14');

-- Modify the SELECT statement:
SELECT *
FROM movie
WHERE release_date > '2015-10-31';