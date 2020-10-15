--SELECT avg(end_date - start_date) as average_duration
--FROM reservations;
SELECT AVG(DATE_PART('day', end_date::timestamp - start_date::timestamp)) 
FROM reservations;