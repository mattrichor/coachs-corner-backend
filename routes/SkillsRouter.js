const router = require('express').Router()
const controller = require('../controllers/SkillsController')
const middleware = require('../middleware')

router.get('/:player_id', controller.GetSkillsByPlayerId)

// router.put(
//   '/:workout_id/:player_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdateWorkout
// )

module.exports = router
