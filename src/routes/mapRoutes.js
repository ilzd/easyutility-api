const express = require('express');
const router = express.Router();
const { getMaps } = require('../controllers/mapController');

router.route('/').get(getMaps);

module.exports = router;