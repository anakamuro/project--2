const mongoose = require('mongoose')
const pitchingSchema = require('./pitching-stats')
const battingSchema = require('./batting-stats')

const Schema = mongoose.Schema

const playerSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
        position: {
            type: String
        }, 
        birthplace: {
            type: String
        },
        yearsBorn: {
            type: Number
        },
        pitchingStats: [pitchingSchema],
        battingStats: [battingSchema],
	},
	{
		timestamps: true,
	}
)

const Player = mongoose.model('Player', playerSchema)

module.exports = Player