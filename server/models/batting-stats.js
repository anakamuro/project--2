const mongoose = require('mongoose')

const battingSchema = new mongoose.Schema(
	{
		name: {
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
		}
	},
	{
		timestamps: true,
	}
)


//const Batting = mongoose.model('Batting', battingSchema)

module.exports = battingSchema