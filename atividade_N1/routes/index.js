var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.query.u ? {
    name: req.query.u
  } : null, title: "Fórum IFCE - Início" });
});

module.exports = router;
