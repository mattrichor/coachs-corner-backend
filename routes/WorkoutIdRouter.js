const router = require('express').Router()
const controller = require('../controllers/WorkoutController')
const middleware = require('../middleware')

router.get('/:id', controller.GetWorkoutById)

module.exports = router
