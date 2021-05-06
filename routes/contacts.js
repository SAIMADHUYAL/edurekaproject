var express = require('express');
var router = express.Router();

/* GET contacts page. */
router.get('/', function(req, res, next) {
    res.json(`{status: 'Success'}`);
  //res.render('contacts', { title: 'Express' });
});

router.post('/', function(req,res,next){
    res.json();
});

module.exports = router;
