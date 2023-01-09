/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const { User, Thought } = require('../models');

module.exports = {
  // GET EVERY THOUGHT

  getThought(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // GET JUST ONE THOUGHT

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // CREATE A THOUGHT

  createThought(req, res) {
    Thought.create(req.body)
      // eslint-disable-next-line arrow-body-style
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'User not found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // UPDATE A THOUGHT

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE A THOUGHT

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? req.status(404).json({
              message: 'The thought was deleted but the user was not found!',
            })
          : res.json({ message: 'The thought was successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // CREATE A REACTION

  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE A REACTION

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
