const Lineup = require('../models/lineupModel');

// @desc    Fetch all lineups
// @route   GET /api/lineups
// @access  Public
const getLineups = async (req, res) => {
  try {
    // Advanced filtering can be added here later based on req.query
    const lineups = await Lineup.find({}).populate('mapId', 'name'); // Populate map name
    res.json(lineups);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a lineup
// @route   POST /api/lineups
// @access  Public (for now)
const createLineup = async (req, res) => {
    try {
        const lineup = new Lineup({
            // In a real app, you'd get the creatorId from an authenticated user
            // creatorId: req.user._id, 
            ...req.body
        });

        const createdLineup = await lineup.save();
        res.status(201).json(createdLineup);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Invalid lineup data', error: error.message });
    }
};

module.exports = { getLineups, createLineup };