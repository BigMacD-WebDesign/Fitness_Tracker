const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema([
    {
        workout: {
            type: Date,
            default: Date.now
        }
    },
    {
        exercises:
            [
                {
                    exerciseType: String,
                    name: String,
                    duration: Number,
                    weight: Number,
                    reps: Number,
                    sets: Number,
                    distance: Number
                }
            ]
    }
]);

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;