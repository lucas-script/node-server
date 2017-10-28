var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  return res.status(200).json({ message: 'welcome to my fake server ...' });
});

module.exports = router;
