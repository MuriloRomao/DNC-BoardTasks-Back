var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("var:",process.env.TEST);
  res.send('respond with a resource 3a2');
});

module.exports = router;
