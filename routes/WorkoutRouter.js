const router = require('express').Router()
const controller = require('../controllers/WorkoutController')
const middleware = require('../middleware')

router.get('/:player_id', controller.GetWorkouts)
router.post(
  '/:player_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateWorkout
)
router.put(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateWorkout
)
router.delete(
  '/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.RemoveWorkout
)

module.exports = router
