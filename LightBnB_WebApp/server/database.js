const db = require('./db-conn');

/// Users
/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then((res) => {
      return res.rows[0];
    });
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return db.query(`SELECT * FROM users WHERE id = $1`, [id]).then((res) => {
    return res.rows[0];
  });
};
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  console.log(user);
  return db
    .query(`INSERT INTO users(name, email, password) values($1,$2,$3);`, [
      user.name,
      user.email,
      user.password,
    ])
    .then((res) => {
      return res.rows[0];
    });
};
exports.addUser = addUser;

/// Reservations
/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return db
    .query(
      `SELECT * FROM reservations
  JOIN properties ON properties.id = property_id
  WHERE guest_id = $1 LIMIT $2`,
      [guest_id, limit],
    )
    .then((res) => {
      return res.rows;
    });
};
exports.getAllReservations = getAllReservations;
/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = function (options, limit = 10) {
  console.log(options.query);
  const queryParams = [];
  let Query_String = `
 SELECT properties.*, avg(property_reviews.rating) as average_rating
   FROM properties
 LEFT JOIN property_reviews ON properties.id = property_id
   WHERE 1 = 1
 `;

  if (options.query.city) {
    queryParams.push(`%${options.query.city}%`);
    Query_String += ` AND city LIKE $${queryParams.length}`;
  }

  if (options.query.owner_id) {
    queryParams.push(Number(options.query.owner_id));
    Query_String += ` AND owner_id =  $${queryParams.length}`;
  }

  if (options.query.minimum_rating) {
    queryParams.push(Number(options.query.minimum_rating));
    Query_String += ` AND rating > $${queryParams.length}`;
  }

  if (options.query.minimum_price_per_night) {
    queryParams.push(Number(options.query.minimum_price_per_night) * 100);
    Query_String += ` AND cost_per_night > $${queryParams.length}`;
  }

  if (options.query.maximum_price_per_night) {
    queryParams.push(Number(options.query.maximum_price_per_night) * 100);
    Query_String += ` AND cost_per_night < $${queryParams.length}`;
  }
  queryParams.push(limit);
  Query_String += `
 GROUP BY properties.id
 ORDER BY cost_per_night
 LIMIT $${queryParams.length};
 `;
  console.log(Query_String, queryParams);
  return db
    .query(Query_String, queryParams)
    .then((res) => res.rows)
    .catch((err) => console.error('query error', err.stack));
};
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;
