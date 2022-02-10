var express = require('express');
const app = require('../app');
var router = express.Router();
const passport = require('passport');

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
  router.post('/chat',  
    passport.authenticate('local', { 
    successRedirect: '/chat', 
    failureRedirect: '/login?fail=true' 
  })
  );
  
  module.exports = router;