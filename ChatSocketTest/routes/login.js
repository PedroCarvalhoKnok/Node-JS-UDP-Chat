var express = require('express');
const app = require('../app');
var router = express.Router();
const passport = require('passport');
//var username = req.username;

/* GET home page. */
router.get('/', (req, res, next) => {
  if(req.query.fail)
  res.render('login', { message: 'Usuário e/ou senha incorretos!' })
 else
  res.render('login', { message: null });
  });
  
  /* GET chat page. */
  router.get('/login', (req, res, next) => {
     if(req.query.fail)
      res.render('login', { message: 'Usuário e/ou senha incorretos!' })
     else
      res.render('login', { message: null });
  });

/* POST to chat page. */
  router.post('/chat',(req, res) => {
    console.log(req.body.username);
     passport.authenticate('local', { 
    successRedirect: `/chat`, 
    failureRedirect: '/login?fail=true',
    })(req, res), {username: req.body.username}
  }
  );
  
  module.exports = router;

  //exports.username = username;