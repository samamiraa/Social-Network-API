// imports for mongoose & dayjs
const { Schema, Types } = require('mongoose');
const { formatDate } = require('../utils/formatDate');

// data types for reactions, schema only
const reactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
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
        _id: false
    }
)

module.exports = reactionSchema;