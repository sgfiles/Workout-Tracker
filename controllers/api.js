const router = require ("express").Router();
const Workout = require("../models/workout");
// finish get code
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exerciseDuration",
        },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
}),
  // finish get
  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          $sum: "$exerciseDuration",
        },
      },
    ]);
  });
// more code
router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then((dbWorkout) => {
      res.json(dbWorkout)
  })
  .catch((err) => {
      res.json(err);
  })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
Workout.findByIdAndUpdate(
    params.id, 
    { $push: { exercise: body } },
 {new: true, runValidators: true }
).then((dbWorkout) => {
    res.json(dbWorkout);
})
.catch((err) => {
    res.jason(err);
})
});

module.exports = router;
