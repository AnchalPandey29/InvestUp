const { Schema, model } = require("../connection");

const schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: Number, required: true},
  created_at:{Date},
  });


module.exports = model("campaign", schema);
