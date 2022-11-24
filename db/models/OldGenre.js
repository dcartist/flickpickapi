
const mongoose = require('../connection')
const Schema = mongoose.Schema

const OldGenre = new Schema({
    id: Number,
    name: String
})

module.exports = mongoose.model('OldGenre', OldGenre)