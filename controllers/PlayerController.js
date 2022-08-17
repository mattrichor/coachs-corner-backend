const { Player } = require('../models')

const GetPlayersByCoachId = async (req, res) => {
  try {
    const players = await Player.findAll({
      where: {
        coachId: req.params.coach_id
      }
    })
    res.send(players)
  } catch (error) {
    throw error
  }
}

const GetLoggingInPlayer = async (req, res) => {
  try {
    const players = await Player.findOne({
      where: {
        email: req.params.email
      }
    })
    res.send(players)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlayersByCoachId,
  GetLoggingInPlayer
}
