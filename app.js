const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
// const PlayerAuthRouter = require('./routes/PlayerAuthRouter')
const PlayerRouter = require('./routes/PlayerRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')
const SkillsRouter = require('./routes/SkillsRouter')
const SkillNameRouter = require('./routes/SkillNameRouter')

const app = express()

const PORT = process.env.PORT || 3001
//https://coachs-corner-backend.herokuapp.com/

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/workout', WorkoutRouter)
app.use('/players', PlayerRouter)
app.use('/skills', SkillsRouter)
app.use('/', SkillNameRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
