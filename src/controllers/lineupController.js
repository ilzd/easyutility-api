const Lineup = require('../models/lineupModel');

// @desc    Fetch all lineups with filtering
// @route   GET /api/lineups
// @access  Public
const getLineups = async (req, res) => {
  try {
    // Destructure all possible filters from the query string
    const { mapId, grenadeType, origin, destination } = req.query;
    const filter = {};

    if (mapId) {
      filter.mapId = mapId;
    }
    if (grenadeType) {
      filter.grenadeType = grenadeType;
    }
    // Add filtering for origin callout using dot notation for nested fields
    if (origin) {
      filter['origin.calloutId'] = origin;
    }
    // Add filtering for destination callout
    if (destination) {
      filter['destination.calloutId'] = destination;
    }

    const lineups = await Lineup.find(filter).populate('mapId', 'name imageUrl');
    res.json(lineups);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch a single lineup by ID
// @route   GET /api/lineups/:id
// @access  Public
const getLineupById = async (req, res) => {
  try {
    // We use populate to replace the mapId with the actual map document
    const lineup = await Lineup.findById(req.params.id).populate('mapId');
    if (lineup) {
      res.json(lineup);
    } else {
      res.status(404).json({ message: 'Lineup not found' });
    }
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

module.exports = { getLineups, getLineupById, createLineup };