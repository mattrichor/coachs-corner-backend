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
        id: req.params.workout_id
      },
      include: [
        {
          model: Skill,
          as: 'skillWorkouts',
          through: { attributes: [] },
          where: { playerId: req.params.player_id }
        }
      ]
    })
    res.send(workout)
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetSkillsByPlayerId,
  GetWorkoutSkills,
  GetAndUpdateSkillLevel
}
