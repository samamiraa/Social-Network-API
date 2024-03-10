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

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user: ', error);
            res.status(500).json(error);
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });
            if (!deleteUser) {
                return res.status(404).json({ message: 'No users exist!'});
            }
            res.status(200).json(deleteUser);
        } catch (error) {
            console.error('Error deleting user: ', error);
            res.status(500).json(error);
        }
    },

    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { username: req.body.username, email: req.body.email },
                { new: true }
                );

            if (!updateUser) {
                return res.status(404).json({ message: 'No users exist!'});
            }
            
            res.status(200).json(updateUser);
        } catch (error) {
            console.error('Error updating user: ', error);
            res.status(500).json(error);
        }
    },
};