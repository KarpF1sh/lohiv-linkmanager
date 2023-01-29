const express = require('express');
const router = express.Router();

// index page
router.get('/', function(req, res) {
    res.sendStatus(403);
});

// other routes
router.use('/f', require('./f'));

module.exports = router;
