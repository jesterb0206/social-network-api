/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const { User, Thought } = require('../models');

module.exports = {
  // GET EVERY USER

  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // GET JUST ONE USER

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // CREATE A USER

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // UPDATE A USER

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE A USER AND REMOVE THEIR THOUGHTS

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({
          message: 'Both the user and their thought(s) were deleted!',
        })
      )
      .catch((err) => res.status(500).json(err));
  },

  // ADD A FRIEND

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE A FRIEND

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
