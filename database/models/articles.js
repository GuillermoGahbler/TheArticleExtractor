const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    headline: {
        type: String,
    },
    summary: {
        type: String,
    },
    url: {
        type: String,
    }
});


module.exports = articleSchema