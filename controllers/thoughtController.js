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
    }
}