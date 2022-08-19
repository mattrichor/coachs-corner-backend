const { Coach, Player } = require('../models')

const GetAllCoaches = async (req, res) => {
  try {
    const coaches = await Coach.findAll()
    res.send(coaches)
  } catch (error) {
    throw error
  }
}

const AssignCoachToPlayer = async (req, res) => {
  try {
    const player = await Player.update(
      { coachId: req.params.coach_id },
      { where: { id: req.params.player_id }, returning: true }
    )
    res.send(player)
  } catch (error) {
    throw error
  }
}

module.exports = { GetAllCoaches, AssignCoachToPlayer }
