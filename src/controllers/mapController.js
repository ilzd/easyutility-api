const Map = require('../models/mapModel');

// @desc    Fetch all maps
// @route   GET /api/maps
// @access  Public
const getMaps = async (req, res) => {
  try {
    const maps = await Map.find({});
    res.json(maps);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getMaps };