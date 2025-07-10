const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');
const mapRoutes = require('./src/routes/mapRoutes');
const lineupRoutes = require('./src/routes/lineupRoutes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Allow the server to accept JSON in the body of requests

// Simple Route for testing
app.get('/', (req, res) => {
  res.send('CS Lineup API is running...');
});

// Use the map routes
app.use('/api/maps', mapRoutes);
app.use('/api/lineups', lineupRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});