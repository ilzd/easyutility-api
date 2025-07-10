const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

// Load models
const Map = require('./src/models/mapModel');
const Lineup = require('./src/models/lineupModel');

// Load data
const mapsData = require('./data/maps');
const lineupsData = require('./data/lineups');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Lineup.deleteMany();
    await Map.deleteMany();

    // Insert maps
    const createdMaps = await Map.insertMany(mapsData);

    // Get map IDs
    const mirageMap = createdMaps.find(m => m.name === 'Mirage');
    const infernoMap = createdMaps.find(m => m.name === 'Inferno');

    // Add mapId to lineups
    const sampleLineups = lineupsData.map(lineup => {
      if (lineup.title.includes('Mirage')) {
        return { ...lineup, mapId: mirageMap._id };
      }
      if (lineup.title.includes('Inferno')) {
        return { ...lineup, mapId: infernoMap._id };
      }
      return lineup;
    });

    await Lineup.insertMany(sampleLineups);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Map.deleteMany();
    await Lineup.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}