var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user.username);
  res.render('chat', { user: req.user.username });
});

/* GET chat page. */
router.get('/chat', function(req, res){
   res.render('chat', {});
});

module.exports = router;
