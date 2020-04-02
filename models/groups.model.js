const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GroupSchema = new Schema({
    roomName: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Group', GroupSchema);