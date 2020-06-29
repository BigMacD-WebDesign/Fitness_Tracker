const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Creation of the new schema and collections:
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
//End schema and collections

const Fitness = mongoose.model("Fitness", FitnessSchema);

//Required to export file.
module.exports = Fitness;