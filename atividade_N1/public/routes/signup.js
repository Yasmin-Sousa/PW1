var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup', { user: req.query.u ? {
    name: req.query.u
  } : null, title: "Fórum IFCE - Cadastrar" });
});

module.exports = router;
