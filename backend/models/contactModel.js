const { Schema, model } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const contactSchema = new Schema({
    name: { type: String },
    email: String,
    message:{type:String},
  });

module.exports = model("contact", contactSchema);
