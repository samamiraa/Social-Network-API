// imports models
const { User, Thought } = require('../models');

module.exports = {
    //gets all users
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

    //gets one user by id, populates friend & thought info
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.status(200).json(user);
        } catch (error) {
            console.error('Error getting user: ', error);
            res.status(500).json(error);
        }
    },

    // creates user
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user: ', error);
            res.status(500).json(error);
        }
    },

    //deletes user
    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });
            if (!deleteUser) {
                return res.status(404).json({ message: 'No users exist!'});
            }

            //deletes associated thoughts
            await Thought.deleteMany({ _id: { $in: deleteUser.thoughts } });
            res.status(200).json(deleteUser);
        } catch (error) {
            console.error('Error deleting user: ', error);
            res.status(500).json(error);
        }
    },

    //updates user
    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                req.body ,
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

    //add friend to user
    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } }, { new: true }
            );

            if (!newFriend) {
                return res.status(404).json({ message: 'No users exist!'});
            };

            res.status(200).json(newFriend);
        } catch (error) {
            console.error('Error adding friend: ', error);
            res.status(500).json(error);
        }
    },

    //deletes friend
    async deleteFriend(req, res) {
        try {
            const deleteFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } }, { new: true }
            );

            if (!deleteFriend) {
                return res.status(404).json({ message: 'No users exist!'});
            };

            res.status(200).json(deleteFriend);
        } catch (error) {
            console.error('Error deleting friend: ', error);
            res.status(500).json(error);
        }
    }
};