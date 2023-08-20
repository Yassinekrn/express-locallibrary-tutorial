const express = require('express');
const router = express.Router();

/* GET home page. */
//used to render a specified template along with the values of named variables
//passed in an object.
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});


module.exports = router;
