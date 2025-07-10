const mongoose = require('mongoose');

const positionDetailSchema = new mongoose.Schema({
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
    },
    calloutId: { type: String, required: true },
}, { _id: false });

const throwDetailsSchema = new mongoose.Schema({
    stance: { type: String, enum: ['standing', 'crouching'], required: true },
    type: { type: String, enum: ['normal', 'jump-throw', 'run-throw'], required: true },
    strength: { type: String, enum: ['weak', 'normal', 'strong'], required: true },
}, { _id: false });

const mediaSchema = new mongoose.Schema({
    type: { type: String, enum: ['image', 'video'], required: true },
    url: { type: String, required: true },
    caption: { type: String },
}, { _id: false });

const lineupSchema = new mongoose.Schema({
    title: { type: String, required: true },
    mapId: { type: mongoose.Schema.Types.ObjectId, ref: 'Map', required: true },
    grenadeType: { type: String, enum: ['Smoke', 'Flash', 'Molotov', 'HE Grenade', 'Decoy'], required: true },
    origin: positionDetailSchema,
    destination: positionDetailSchema,
    throwDetails: throwDetailsSchema,
    media: [mediaSchema],
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User model will be created later
    likes: { type: Number, default: 0 },
}, { timestamps: true });

const Lineup = mongoose.model('Lineup', lineupSchema);

module.exports = Lineup;