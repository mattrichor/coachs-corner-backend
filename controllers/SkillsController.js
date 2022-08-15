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

module.exports = {
  GetSkillsByPlayerId
}
