// Model folder with a model for your workout. You can use the mongoose schema as an example. Your exercises are going to be in an array

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsdb = new Schema({
    exercise:{
        type:String,
        trim:true,
        required: "Workout is required"
    },

    exerciseCreated: {
        type:Date,
        default: Date.now
    }
});

const Exercise= mongoose.model("exercise", workoutsdb);

module.exports = Exercise;