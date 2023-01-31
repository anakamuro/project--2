const mongoose = require('mongoose')

const pitchingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		win: {
			type: String,
			required: true,
		},
        loss: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
)


module.exports = pitchingSchema