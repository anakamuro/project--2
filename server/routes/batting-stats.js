const express = require('express')
const router = express.Router()

// require campaign model
const Player = require('../models/player')
const { handle404 } = require('../lib/custom-errors')

// CREATE
// POST /notes/

router.get('/batting-stats', (req, res, next) => {
    Player.find()
        .then(players => {
            return players.map(player => player)
        })
        .then(players => {
            res.status(200).json({ players: players })
        })
        .catch(next)
})

router.post('/batting-stats', (req, res, next) => {
	const playerId = req.body.battingStats.playerId
     console.log('playerId', playerId)
	 const battingStat = req.body.battingStats
	Player.findById(playerId)
		.then(handle404)
		.then((player) => {
			player.battingStats.push(battingStat)

			return player.save()
		})

		.then((player) => res.status(201).json({ player: player }))
		.catch(next)
})

module.exports = router