const express = require("express")
const router = express.Router();
const Workout = require("../models/workout");
// finish get code
router.get("workouts", (req,res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exerciseDuration",
                },
            },
        },
    ])
}),
// finish get
router.get("/workouts/range", (req,res) => {
    Workout.aggregate([
        {
            $addFields: {
                $sum: "$exerciseDuration",
            },
        },
    ])
})
// more code 
router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
})

router.put("/workouts/:id", ({ body, params }, res) => {
    const update = { $push: { exercise: body }};

    Workout.findOneAndUpdate(req, update)
    .then((updatedWorkoutData) => {
        res.json(updatedWorkoutData);
    })
});

module.exports = router;