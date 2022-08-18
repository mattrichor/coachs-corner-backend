const router = require('express').Router()
const controller = require('../controllers/WorkoutController')
const middleware = require('../middleware')

router.put('/:workout_id', controller.MarkWorkoutAsComplete)

module.exports = router
