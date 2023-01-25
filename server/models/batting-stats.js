const mongoose = require('mongoose')

const battingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		average: {
			type: String,
			required: true,
		},
        homerun: {
			type: String,
			required: true,
		},
        rbi: {
			type: String,
			required: true,
		},
        image: {
			type: String
		},
        playerId: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = battingSchema