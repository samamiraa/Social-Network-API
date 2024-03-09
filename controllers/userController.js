const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            if (!users) {
                return res.status(404).json({ message: 'No users exist!'});
            }
            res.status(200).json(users);
        } catch (error) {
            console.error('Error getting users: ', error);
            res.status(500).json(error);
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.status(200).json(user);
        } catch (error) {
            console.error('Error getting user: ', error);
            res.status(500).json(error);
        }
    },
};