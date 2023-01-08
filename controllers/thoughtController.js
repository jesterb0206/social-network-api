/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .select('-__v')
      .populate('reactions')
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .populate('reactions')
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.status(200).json(thought);
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Unable to add thought!' })
          : User.findOneAndUpdate(
              { userName: req.body.userName },
              { $addToSet: { thoughts: thought._id } },
              { runValidators: true, new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(200).json({
              message:
                "The thought was added, but we're unable to find the corresponding user at this time!",
            })
          : res.status(200).json(user)
      )
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.status(200).json({ message: 'Thought updated!' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
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
          ? req.status(404).json({ message: 'User not found!' })
          : res.status(200).json(user)
      )
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  addThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.status(200).json({ message: 'Reaction successfully added!' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  removeThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought not found!' })
          : res.status(200).json(thought)
      )
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
};
