const database = require('./database');
//const apiRoutes = require('./apiRoutes');
const userRoutes = require('./userRoutes');

const path = require('path');

const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

// DB CONNECTION
const db = require('./db-connection');
// DB HELPERS (FUNCTIONS TO QUERY THE DB)
const helpers = require('./database.js')(db);

const app = express();
app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// /api/endpoints
const apiRoutes = require('./apiRoutes')(helpers);
//const apiRouter = express.Router();
//apiRoutes(apiRouter, database);
app.use('/api', apiRoutes);

// /user/endpoints
const userRouter = express.Router();
userRoutes(userRouter, database);
app.use('/users', userRouter);

app.use(express.static(path.join(__dirname, '../public')));

app.get("/test", (req, res) => {
  res.send("🤗");
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => console.log(err || `listening on port ${port} 😎`));