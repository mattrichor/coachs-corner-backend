const { Coach, Player, Skill } = require('../models')
const middleware = require('../middleware')

const LoginCoach = async (req, res) => {
  try {
    const coach = await Coach.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      coach &&
      (await middleware.comparePassword(
        coach.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: coach.id,
        email: coach.email,
        name: coach.name,
        sport: coach.sport,
        teamName: coach.teamName
      }
      let token = middleware.createToken(payload)
      return res.send({ coach: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const LoginPlayer = async (req, res) => {
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
        email: player.email,
        name: player.name,
        primaryPosition: player.primaryPosition,
        secondaryPosition: player.secondaryPosition,
        height: player.height,
        weight: player.weight,
        age: player.age,
        coachId: player.coachId
      }
      let token = middleware.createToken(payload)
      return res.send({ player: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const RegisterCoach = async (req, res) => {
  try {
    const { name, email, password, sport, teamName } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const coach = await Coach.create({
      name,
      email,
      passwordDigest,
      sport,
      teamName
    })
    res.send(coach)
  } catch (error) {
    throw error
  }
}

const RegisterPlayer = async (req, res) => {
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
      passwordDigest,
      primaryPosition,
      secondaryPosition,
      height,
      weight,
      age,
      coachId
    })
    res.send(player)
    const skills = await Skill.bulkCreate([
      {
        skillName: 'Speed',
        skillLevel: 25,
        playerId: player.id
      },
      {
        skillName: 'Catching',
        skillLevel: 25,
        playerId: player.id
      },
      {
        skillName: 'Pitch Control',
        skillLevel: 25,
        playerId: player.id
      },
      {
        skillName: 'Pitch Velocity',
        skillLevel: 25,
        playerId: player.id
      },
      {
        skillName: 'Contact',
        skillLevel: 25,
        playerId: player.id
      },
      {
        skillName: 'Power',
        skillLevel: 25,
        playerId: player.id
      }
    ])
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const coach = await Coach.findByPk(req.params.coach_id)
    if (
      coach &&
      (await middleware.comparePassword(
        coach.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await coach.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: coach })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  LoginCoach,
  LoginPlayer,
  RegisterCoach,
  RegisterPlayer,
  UpdatePassword,
  CheckSession
}
