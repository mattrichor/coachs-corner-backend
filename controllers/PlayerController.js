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

module.exports = {
  GetPlayersByCoachId
}
