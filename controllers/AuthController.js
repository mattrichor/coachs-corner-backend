const { Coach } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
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
        email: coach.email
      }
      let token = middleware.createToken(payload)
      return res.send({ coach: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
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
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
