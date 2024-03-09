const { Schema, model, SchemaTypes } = require('mongoose');
const formatDate = require('../utils/formatDate');

const reactionSchema = new Schema(
    {
        reactionId: Schema.Types.ObjectId,
        reactionBody: { type: String, required: true, maxLength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: currentDate => formatDate(currentDate) },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

module.exports = Reaction;