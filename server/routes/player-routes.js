// require Express
const express = require('express')
const { requireToken } = require('../config/auth')
const { handle404 } = require('../lib/custom-errors')

// require the Model we just created
const Player = require('../models/player')

// Creating a router for us to make paths on
const router = express.Router()

// Comments do not match routes. Make sure to update comments when copying and pasting from a source

// INDEX
// GET /campaigns
router.get('/players', requireToken, (req, res, next) => {
	Player.find()
		.then((players) => {
			return players.map((player) => player)
		})
		.then((players) => res.status(200).json({ players: players }))
		.catch(next)
})

// SHOW
// GET /campaigns/5a7db6c74d55bc51bdf39793
router.get('/players/:id', requireToken, (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Player.findById(req.params.id)
		.then(handle404)
		.then((player) => res.status(200).json({ player: player }))
		.catch(next)
})

// CREATE
// POST /campaigns
router.post('/players', requireToken, (req, res, next) => {
	Player.create(req.body.player)
		.then((player) => {
			res.status(201).json({ player: player })
		})
		.catch(next)
})

// UPDATE
// PATCH /campaigns/5a7db6c74d55bc51bdf39793
router.patch('/players/:id', requireToken,(req, res, next) => {
	Player.findById(req.params.id)
		.then(handle404)
		.then((player) => {
			return player.updateOne(req.body.player)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// DESTROY
// DELETE /campaigns/5a7db6c74d55bc51bdf39793
router.delete('/players/:id', requireToken, (req, res, next) => {
	Player.findById(req.params.id)
		.then(handle404)
		.then((player) => {
			player.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// exporting the router to use elsewhere
module.exports = router
