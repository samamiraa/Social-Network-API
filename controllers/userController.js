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
            res.status(500).json(error);
        }
    }
};