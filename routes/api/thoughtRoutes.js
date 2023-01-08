const express = require('express');
const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

const router = express.Router();

router.route('/').get(getAllThoughts).post(createThought);
router
  .route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);
router.route('/:thoughtId/reactions').post(addThoughtReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
