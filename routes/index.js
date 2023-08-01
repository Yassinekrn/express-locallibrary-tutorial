const express = require('express');
const router = express.Router();

/* GET home page. */
//used to render a specified template along with the values of named variables
//passed in an object.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
