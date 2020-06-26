const router = require("express").Router();
const db = require("../models/fitnessModel.js");
const path = require("path");

//Begin API routes

//Get Route
router.get("/api/workouts", (req, res) => {
    db.find().then(records => {
        console.log(records);
        res.json(records);
    }).catch(error => {
        res.json(error);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } }, { new: true })
        .then(records => {
            console.log(records);
            res.json(records);
        }).catch(error => {
            res.json(error);
        });
});

router.post("/api/workouts", (req, res) => {
    db.create(req.body).then(records => {
        console.log(records);
        res.json(records);
    }).catch(error => {
        res.json(error);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(7).then(records => {
        console.log(records);
        res.json(records);
    }).catch(error => {
        res.json(error);
    });
});
//End API Routes

//Begin HTML Routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/stats.html"))
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
});

module.exports = router;
