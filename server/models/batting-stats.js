const mongoose = require('mongoose')

const battingSchema = new mongoose.Schema(
	{
		name: {
			type: String
		},
		average: {
			type: Number
		},
        homerun: {
			type: String
		},
        rbi: {
			type: String
		},
		playerId: {
			type: String
		}
	},
	{
		timestamps: true,
	}
)


//const Batting = mongoose.model('Batting', battingSchema)

module.exports = battingSchema