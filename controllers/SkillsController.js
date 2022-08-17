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


const GetWorkoutSkills = async (req, res) => {
  try {
    const list = await Skill.findAll({
      include: [
        {
          model: Workout,
          as: 'workoutSkills',
          through: { attributes: [] }
        }
      ]
    })
    res.send(list)
  } catch (error) {
    console.log(error)
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


module.exports = {
  GetSkillsByPlayerId,
  GetWorkoutSkills,
  GetAndUpdateSkillLevel
}
