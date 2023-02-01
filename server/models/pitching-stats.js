const mongoose = require('mongoose')

const pitchingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		win: {
			type: String
		},
        loss: {
			type: String
		},
		era:{
			type: Number
		},
		playerId: {
			type: Number
		}
	},
	{
		timestamps: true,
	}
)


module.exports = pitchingSchema