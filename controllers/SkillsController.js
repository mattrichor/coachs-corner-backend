const { Skill } = require('../models')

const GetSkillsByPlayerId = async (req, res) => {
  try {
    const skills = await Skill.findAll({
      where: {
        playerId: req.params.player_id
      }
    })
    res.send(skills)
  } catch (error) {
    throw error
  }
}

const CreateSkillsOnPlayerRegister = async (req, res) => {
  try {
    const skills = await Skill.Create()
    res.send(skills)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSkillsByPlayerId
}
