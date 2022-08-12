const router = require('express').Router()
const controller = require('../controllers/PlayerAuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register/player', controller.Register)
router.post(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
