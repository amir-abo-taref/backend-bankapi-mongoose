const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: Number,
    required: true,
  },
  userCash: {
    type: Number,
    required: true,
  },
  userCredit: {
    type: Number,
    required: true,
  },
  userAcountId: {
    type: Number,
    required: true,
  },
});

const user = mongoose.model("user", usersSchema);

module.exports = {
  user,
};
