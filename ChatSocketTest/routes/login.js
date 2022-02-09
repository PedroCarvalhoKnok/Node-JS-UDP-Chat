var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });
  
  /* GET chat page. */
  router.get('/login', function(req, res){
     res.render('login', {});
  });

/* POST to chat page. */
  router.post('/chat', function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    
    return res.render('chat', {user: username, password: password});
 });
  
  module.exports = router;