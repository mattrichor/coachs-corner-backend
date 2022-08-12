const router = require('express').Router()
const controller = require('../controllers/PlayerController')
const middleware = require('../middleware')

router.get(
  '/:coach_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPlayersByCoachId
)

module.exports = router
