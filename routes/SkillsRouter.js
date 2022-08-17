const router = require('express').Router()
const controller = require('../controllers/SkillsController')
const middleware = require('../middleware')

router.get('/:player_id', controller.GetSkillsByPlayerId)
router.get('/:player_id/:workout_id', controller.GetAndUpdateSkillLevel)
router.get('/ids/:skill_id', controller.GetSkillName)

//this is a comment
module.exports = router
