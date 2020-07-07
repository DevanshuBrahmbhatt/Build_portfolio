const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var session = require('express-session');
const cors = require('cors');
const cs = require('cookie-session');
const cookieParser = require('cookie-parser');
var path = require('path');
const passport = require('passport');
const passportSetup = require('./config/passport_setup');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
const port = 5000;
app.set('port', process.env.port || port);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: 'W$q4=25*8%v-}UV',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 300000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/api/user');
app.use('/api', routes);

var db = require('./config/conn').url;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
