/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const { response } = require('express');
const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .select('-__v')
      .populate('thoughts')
      .then((users) => res.status(200).json(users))
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  getUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .then((user) => {
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : res.status(200).json(user);
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.status(200).json(user))
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => {
        !user
          ? res.status(404).json({ message: 'User not found' })
          : res.status(200).json({ message: 'User updated!' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found!' });
        } else {
          return Thought.deleteMany({ username: user.username }, { new: true });
        }
      })
      .then((thoughts) =>
        !thoughts
          ? response.status(404).json({
              message:
                'The user was deleted but they had not posted any thoughts at the time of deletion!',
            })
          : res.status(200).json({
              message:
                'Both the user and their thoughts were successfully deleted!',
            })
      )
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: 'User not found!' })
          : res.status(200).json(friend)
      )
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found!' })
          : res.status(200).json(user)
      )
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err);
      });
  },
};
