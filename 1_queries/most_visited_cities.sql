SELECT city, count(reservations.property_id) as total_reservations FROM properties
RIGHT JOIN reservations on properties.id=reservations.property_id
GROUP BY city
ORDER BY total_reservations DESC;


