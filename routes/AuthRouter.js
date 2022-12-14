const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login/coach', controller.LoginCoach)
router.post('/login/player', controller.LoginPlayer)

router.post('/register/coach', controller.RegisterCoach)
router.post('/register/player', controller.RegisterPlayer)
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
