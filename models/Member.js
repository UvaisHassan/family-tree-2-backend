const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Must provide gender"],
  },
  birthday: String,
  father_id: mongoose.Schema.Types.ObjectId,
  mother_id: mongoose.Schema.Types.ObjectId,
  spouse_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Member", MemberSchema);
