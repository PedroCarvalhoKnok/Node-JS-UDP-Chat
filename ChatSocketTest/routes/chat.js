var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Express' });
});

/* GET chat page. */
router.get('/chat', function(req, res){
  console.log('teste...')
   res.render('chat', {});
});

module.exports = router;
