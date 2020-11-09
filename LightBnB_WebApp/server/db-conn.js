const { Pool } = require('pg');
const connection = new Pool({
  user: 'ynfmdceh',
  password: 'vddyV6iXGOEeruejp459Z9IP-fFoIi-X',
  host: 'hansken.db.elephantsql.com',
  database: 'ynfmdceh',
  port: '5432',
});
connection.connect(() => {
  console.log('Connected to lightbnb');
});
module.exports = connection;
