const router = require("express").Router();
const Exercise = require("../models/workout");

router.post("/api/workout", (req, res) => {
    const newExercise = req.body;
    console.log(newExercise);

    Exercise.create(newExercise)
 
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });

})


router.get("/all", (req, res) => {
    Exercise.find()
    .then(dbExercises => {
        res.json(dbExercises);
      })
      .catch(err => {
        res.json(err);
      });
  
  });


module.exports = router;
