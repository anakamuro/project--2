const mongoose = require('mongoose')

const pitchingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		win: {
			type: Number
		},
        loss: {
			type: Number
		},
		era:{
			type: Number
		},
		playerId: {
			type: String
		}
	},
	{
		timestamps: true,
	}
)


module.exports = pitchingSchema