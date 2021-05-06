var express = require('express');
var router = express.Router();

/* GET AddUser page. */
router.get('/', function(req, res, next) {
    //res.json(`{status: 'Success'}`);
  res.render('adduser', { title: 'My First Form' });
});

module.exports = router;
