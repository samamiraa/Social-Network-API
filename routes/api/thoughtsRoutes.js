// imports express & functions from controllers
const router = require('express').Router();
const { getThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');

// /api/thoughts
// get thoughts & create thoughts route
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// get & update & delete one thought route
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// add reaction route
router.route('/:thoughtId/reactions').put(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// delete reaction route
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;