const express = require('express');
const router = express.Router();
const { getLineups, createLineup, getLineupById } = require('../controllers/lineupController');

router.route('/').get(getLineups).post(createLineup);
router.route('/:id').get(getLineupById);

module.exports = router;