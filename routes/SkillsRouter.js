const router = require('express').Router()
const controller = require('../controllers/SkillsController')
const middleware = require('../middleware')

router.get('/:player_id', controller.GetSkillsByPlayerId)
router.get(
  '/workouts/:player_id/:workout_id',
  controller.GetAndUpdateSkillLevel
)

module.exports = router
