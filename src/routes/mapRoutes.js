const express = require('express');
const router = express.Router();
const { getMaps, getMapById } = require('../controllers/mapController');

router.route('/').get(getMaps);
router.route('/:id').get(getMapById);

module.exports = router;