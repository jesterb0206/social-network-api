const mongoose = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: [true, 'A thought can not be blank!'],
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: [true, 'A thought must belong to a valid username!'],
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
