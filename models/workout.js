const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: ()=> new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: 'Enter exercise to perform',
            },
            name: {
                type: String,
                required: 'Enter exercise name',
            },
            duration: {
                type: Number,
                required: 'Enter length of exercise in minutes',
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
        },
    ],
    
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout
