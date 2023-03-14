const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addThoughtReaction, 
  deleteReaction,} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
