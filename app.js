const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const PlayerRouter = require('./routes/PlayerRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')
const SkillsRouter = require('./routes/SkillsRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/workout', WorkoutRouter)
app.use('/players', PlayerRouter)
app.use('/skills', SkillsRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
