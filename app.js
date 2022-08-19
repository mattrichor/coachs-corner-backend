const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const PlayerRouter = require('./routes/PlayerRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')
const SkillsRouter = require('./routes/SkillsRouter')
const SkillNameRouter = require('./routes/SkillNameRouter')
const CompletionRouter = require('./routes/CompletionRouter')
const WorkoutIdRouter = require('./routes/WorkoutIdRouter')
const CoachRouter = require('./routes/CoachRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/workout', WorkoutRouter)
app.use('/players', PlayerRouter)
app.use('/coaches', CoachRouter)
app.use('/skills', SkillsRouter)
app.use('/', SkillNameRouter)
app.use('/complete', CompletionRouter)
app.use('/workoutById', WorkoutIdRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
