const mongoose = require('mongoose');

const calloutSchema = new mongoose.Schema({
    calloutId: { type: String, required: true, unique: true },
    name: {
        en: { type: String, required: true },
        pt_BR: { type: String },
        es: { type: String },
    },
    area: { type: [mongoose.Schema.Types.Mixed] }, // For storing coordinate arrays
});

const mapSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    minimapUrl: { type: String, required: true },
    callouts: [calloutSchema],
}, { timestamps: true });

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;