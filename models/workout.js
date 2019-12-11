// Model folder with a model for your workout. You can use the mongoose schema as an example. Your exercises are going to be in an array

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsdb = new Schema({

    date: {
        type: Date,
        default: Date.now()
    },
    type: String,
    name: String,
    duration: Number

});

const Exercise= mongoose.model("Exercise", workoutsdb);

module.exports = Exercise;