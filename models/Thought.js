// imports from mongoose, dayjs and reactionschema
const { Schema, model } = require('mongoose');
const reactionSchema = require('../models/Reaction')
const { formatDate } = require('../utils/formatDate');

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
        createdAt: { type: Date, default: Date.now, get: currentDate => formatDate(currentDate) },
        username: { type: String, required: true },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

//creates reaction count virtual
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// initiates Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;