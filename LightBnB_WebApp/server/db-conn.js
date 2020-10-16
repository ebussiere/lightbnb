const { Pool } = require('pg');
const connection = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});
connection.connect(() => {
  console.log('Connected to lightbnb');
});
module.exports = connection;