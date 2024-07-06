const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteworkout,
    updateworkout
} = require('../controllers/workoutControllers')

const router = express.Router()


router.get('/',getWorkouts)

//GET a single Workout
router.get('/:id',getWorkout)

//POST a single Workout
router.post('/',createWorkout)
router.delete('/:id',deleteworkout)

router.patch('/:id',updateworkout)
module.exports = router