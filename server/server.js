// command center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = 8000

const battingRoutes = require('./routes/batting-stats')
const requestLogger = require('./lib/request-logger')
const pitchingRoutes = require('./routes/pitching-stats')
const playerRoutes = require('./routes/player-routes')
const userRoutes = require('./routes/user-routes')
// deprecation warning
mongoose.set('strictQuery', true)

// creates the connection between your local MongoDB and this express app
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// starting an express app
const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

// sending json 
// need to be able to accept json
app.use(express.json())

app.use(requestLogger)

app.use(userRoutes)
app.use(playerRoutes)
app.use(battingRoutes)
app.use(pitchingRoutes)


app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app