const router = require('express').Router()
const controller = require('../controllers/PlayerController')
const middleware = require('../middleware')

router.get(
  '/:coach_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPlayersByCoachId
)
router.get(
  '/logging_in/:email',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetLoggingInPlayer
)

module.exports = router
