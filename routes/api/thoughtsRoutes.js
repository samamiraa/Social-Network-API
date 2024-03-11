const router = require('express').Router();
const { getThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction } = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').put(addReaction);

module.exports = router;