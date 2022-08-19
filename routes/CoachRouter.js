const router = require('express').Router()
const controller = require('../controllers/CoachController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllCoaches
)
router.put(
  '/choose/:player_id/:coach_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AssignCoachToPlayer
)

module.exports = router
