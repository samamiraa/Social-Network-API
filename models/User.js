const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true, trim: true },
        email: { 
            type: String, required: true, unique: true, match: [/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\, 'Please enter in a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ], 
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);