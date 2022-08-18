const { Skill, Workout } = require('../models')

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

const GetAndUpdateSkillLevel = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      where: {
        id: req.params.workout_id,
        playerId: req.params.player_id
      }
    })
    const skillIncrease = await workout.skillIncrease
    const skill = await Skill.findOne({ where: { id: workout.skillId } })
    const skillLevel = (await skill.skillLevel) + skillIncrease

    console.log(skillLevel)
    const updatedSkill = await Skill.update(
      { skillLevel: skillLevel },
      { where: { id: workout.skillId }, returning: true }
    )
    await Workout.destroy({
      where: {
        id: req.params.workout_id,
        playerId: req.params.player_id
      }
    })
    res.send(updatedSkill)
  } catch (error) {
    throw error
  }
}

const GetSkillName = async (req, res) => {
  try {
    const skill = await Skill.findOne({
      where: {
        id: req.params.skill_id
      }
    })
    res.send(skill)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSkillsByPlayerId,
  GetSkillName,
  GetAndUpdateSkillLevel
}
