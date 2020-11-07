//var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

//var conString = "INSERT_YOUR_POSTGRES_URL_HERE"; //Can be found in the Details page
//var client = new pg.Client(conString);
//postgresql://ynfmdceh:vddyV6iXGOEeruejp459Z9IP-fFoIi-X@hansken.db.elephantsql.com/ynfmdceh

const { Pool } = require('pg');
//const conString = "postgresql://ynfmdceh:vddyV6iXGOEeruejp459Z9IP-fFoIi-X@hansken.db.elephantsql.com/ynfmdceh"; //Can be found in the Details page
//const connection = new Pool(conString);
const connection = new Pool({
  user: 'ynfmdceh',
  password: 'vddyV6iXGOEeruejp459Z9IP-fFoIi-X',
  host: 'hansken.db.elephantsql.com',
  database: 'ynfmdceh',
  port: '5432'
});



//or native libpq bindings
//var pg = require('pg').native

//var conString = "postgres://ynfmdceh:vddyV6iXGOEeruejp459Z9IP-fFoIi-X@hansken.db.elephantsql.com:5432/ynfmdceh"; //Can be found in the Details page
//var pool = new pg.Pool(conString);
// pool.connect(function(err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
//   pool.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });
connection.connect(() => {
  console.log('Connected to lightbnb');
});
module.exports = connection;