/* eslint-disable */
const mongoose = require('mongoose');
const lineupSchema = new mongoose.Schema({
    name: String,
    date: Date,
    colors: {
        mainColor: String,
        secondaryColor: String,
        numberColor: String,
    },
    players: [
        {
            id: String,
            num: String,
            name: String,
            goal: Boolean,
            yellowCard: Boolean,
            yellowToRed: Boolean,
            redCard: Boolean,
            position: {
                x: Number,
                y: Number
            }
        }
    ]
});

module.exports = mongoose.model('Lineup', lineupSchema);