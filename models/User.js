// imports mongoose
const { Schema, model } = require('mongoose');

// user data types 
const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true, trim: true },
        email: { 
            type: String, required: true, unique: true, match: [ /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, 'Please enter in a valid email address'],
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

// creates  friendscount virtual
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// initiates user model
const User = model('User', userSchema);

module.exports = User;