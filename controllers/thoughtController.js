const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            if (!thoughts) {
                return res.status(404).json({ message: 'No thoughts exist!'});
            }
            res.status(200).json(thoughts);
        } catch (error) {
            console.error('Error getting thoughts: ', error);
            res.status(500).json(error);
        }
    },

    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.status(200).json(thought);
        } catch (error) {
            console.error('Error getting thought: ', error);
            res.status(500).json(error);
        }
    },

    async createThought(req, res) {
        try {
            try {
                const newThought = await Thought.create(req.body);
                const addToUser = await User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: newThought._id } },
                    { new: true }
                );

                if (!addToUser) {
                    return res
                      .status(404)
                      .json({ message: 'Thought created, but found no user with that ID' });
                };

                res.status(201).json(newThought);
            } catch (error) {
                console.error('Error creating thought: ', error);
                res.status(500).json(error);
            }
        } catch (error) {
            console.error('Error creating thought: ', error);
            res.status(500).json(error);
        }
    },

    async updateThought(req, res){
        try {
            const updateThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                req.body ,
                { new: true }
                );

            if (!updateThought) {
                return res.status(404).json({ message: 'No thoughts exist!'});
            }

            res.status(200).json(updateThought);
        } catch (error) {
            console.error('Error updating thought: ', error);
            res.status(500).json(error);
        }
    }
}