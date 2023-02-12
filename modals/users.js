const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { required: true, type: String, unique: true },
    password: { required: true, type: String },
    name: { required: true, type: String },
    contact: { required: true, type: String, unique: true },
    role: { required: false, type: String }
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;
