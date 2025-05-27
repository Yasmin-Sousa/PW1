var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var users = [
    {
      name: "Yasmin",
      age: 19
    }
  ]

  res.render('users/users', { users: users });
});

module.exports = router;
