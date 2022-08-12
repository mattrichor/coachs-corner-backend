const { Player } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const player = await Player.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      player &&
      (await middleware.comparePassword(
        player.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: player.id,
        email: player.email
      }
      let token = middleware.createToken(payload)
      return res.send({ player: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      primaryPosition,
      secondaryPosition,
      height,
      weight,
      age,
      coachId
    } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const player = await Player.create({
      name,
      email,
      password,
      primaryPosition,
      secondaryPosition,
      height,
      weight,
      age,
      coachId
    })
    res.send(player)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const player = await Player.findByPk(req.params.player_id)
    if (
      player &&
      (await middleware.comparePassword(
        player.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await player.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: player })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}