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
		}
	},
	{
		timestamps: true,
	}
)

module.exports = battingSchema