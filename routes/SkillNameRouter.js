const router = require('express').Router()
const controller = require('../controllers/SkillsController')
const middleware = require('../middleware')

router.get('/:skill_id', controller.GetSkillName)

module.exports = router
