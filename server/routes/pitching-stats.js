const express = require('express')
const router = express.Router()

// require campaign model
const Player = require('../models/player')
const { handle404 } = require('../lib/custom-errors')

// CREATE
// POST /notes/

router.get('/pitching-stats', (req, res, next) => {
    Player.find()
        .then(players => {
            return players.map(player => player)
        })
        .then(players => {
            res.status(200).json({ players: players })
        })
        .catch(next)
})


router.post('/pitching-stats', (req, res, next) => {
	const playerId = req.body.pitchingStats.playerId
    const pitchingStat = req.body.pitchingStats
	Player.findById(playerId)
		.then(handle404)
		.then((player) => {
			player.pitchingStats.push(pitchingStat)

			return player.save()
		})

		.then((player) => res.status(201).json({ player: player }))
		.catch(next)
})

module.exports = router