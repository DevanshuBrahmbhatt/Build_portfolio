const user = require('../models/user');
const userdetails = require('../models/userdetails');
const conn = require('../config/conn');
const bodyParser = require('body-parser');
const express = require('express');
var session = require('express-session');
const cs = require('cookie-session');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
const cors = require('cors');
app.use(cors());

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

exports.create = (req, res) => {
  var id = req.body.id; // Google Id Of user //from the frontend  //Vue js ma passport thi set karavanu che
  //  console.log(id);

  userdetails.findOne({ id: id }, (err, data) => {
    // console.log(data);

    if (data) {
      userdetails
        .updateOne(
          { id: id },
          {
            userdetail: req.body,
          }
        )
        .then(
          res.status(200).json({
            msg: ' User Data Updated',
          })
        )
        .catch(() =>
          res.status(400).json({
            msg: 'User Data not Updated',
          })
        );
    } else {
      const newuserdetail = new userdetails({
        userdetail: req.body,
        id: id,
      });
      newuserdetail
        .save()
        .then(
          res.status(200).json({
            msg: 'New User Saved',
          })
        )
        .catch(() =>
          res.status(400).json({
            msg: 'User Not Saved',
          })
        );
    }
  });
};

exports.existingUser = (req, res) => {
  //Put this Method in Mounted Of create form so if userdeatail is there user can show his details

  const id = req.params.id;

  userdetails
    .findOne({ id: id })
    .then((userdetails) => res.json(userdetails.userdetail))
    .catch(() => res.status(400).json(null));
};

exports.check = (req, res) => {
  //This One is For Username //AJAX call Method // Check Username is available or not

  var username = req.params.username;
  var id = req.params.id;

  //    userdetails
  //  .find({"userdetail.userdetails.username":username})
  //     .then((res) => res.status(200).json(1))
  //     .catch((err)=>{
  //         res.status(400).json(err);
  //         })

  userdetails
    .findOne({ id: id })

    .then((data) => {
      // console.log("This data"+ data)

      if (data) {
        if (data.userdetail.userdetails.username === username) {
          // console.log(data.userdetail.userdetails.username)
          res.json(0);
        } else {
          userdetails.find(
            { 'userdetail.userdetails.username': username },
            (err, data1) => {
              // console.log("pachin no"+  data1.length)
              if (data1.length > 0) {
                // console.log(data1);
                res.json(1);
              } else {
                res.json(0);
              }
            }
          );
        }
      } else {
        userdetails.find(
          { 'userdetail.userdetails.username': username },
          (err, data2) => {
            // console.log("pachin no"+  JSON.stringify(data2))
            if (data2.length > 0) {
              // console.log(data2);
              res.json(1);
            } else {
              res.json(0);
            }
          }
        );
      }
    })
    .catch((err) => {
      res.status(400).json('THis id vala' + err);
    });
};

exports.view = (req, res) => {
  //Final for View On template //by username

  // console.log(req.user);

  var username = req.params.username;
  // console.log(username);

  userdetails
    .findOne({ 'userdetail.userdetails.username': username })
    .then((userdetail) => res.json(userdetail.userdetail))
    .catch(() => res.status(400).json({ msg: 'User Not exists' }));
};

exports.countUser = (req, res) => {
  //count for global stats

  userdetails
    .countDocuments()
    .then((n) => {
      res.status(200).json(n);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getUser = (req, res) => {
  // get user's google id from the session
  var user = req.user;

  if (user) {
    res.status(200).json(req.user.id);
  } else {
    res.status(400).json(null);
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
};

exports.googleCallback = (req, res) => {
  // console.log("callback"+req.user.id);
  //  res.redirect('/'+req.user.id);
  res.redirect('/');
};
