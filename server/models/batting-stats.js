const mongoose = require('mongoose')

const battingSchema = new mongoose.Schema(
	{
		name: {
			type: String
		},
        homerun: {
			type: String
		},
        rbi: {
			type: String
		},
		playerId: {
			type: Number
		}
	},
	{
		timestamps: true,
	}
)


//const Batting = mongoose.model('Batting', battingSchema)

module.exports = battingSchema