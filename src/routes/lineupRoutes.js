const express = require('express');
const router = express.Router();
const { getLineups, createLineup } = require('../controllers/lineupController');

router.route('/').get(getLineups).post(createLineup);

module.exports = router;