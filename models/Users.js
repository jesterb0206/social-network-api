const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please provide a username"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide your email address!"],
      validate: [validator.isEmail, "Please provide a valid email address!"],
    },
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

usersSchema.plugin(validator);
usersSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
