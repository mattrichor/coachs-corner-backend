const { Workout } = require('../models')

const GetWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll({
      where: {
        playerId: req.params.player_id
      }
    })
    res.send(workouts)
  } catch (error) {
    throw error
  }
}

const GetWorkout = async (req, res) => {
  try {
    const workouts = await Workout.findAll({})
    res.send(workouts)
  } catch (error) {
    throw error
  }
}

const CreateWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({ ...req.body })
    res.send(workout)
  } catch (error) {
    throw error
  }
}

const UpdateWorkout = async (req, res) => {
  try {
    const workout = await Workout.update(
      { ...req.body },
      { where: { id: req.params.workout_id }, returning: true }
    )
    res.send(workout)
  } catch (error) {
    throw error
  }
}

const RemoveWorkout = async (req, res) => {
  try {
    await Workout.destroy({ where: { id: req.params.workout_id } })
    res.send({
      msg: 'Workout Completed',
      payload: req.params.workout_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetWorkouts,
  CreateWorkout,
  UpdateWorkout,
  RemoveWorkout,
  GetWorkout
}
