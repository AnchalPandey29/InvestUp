const { Schema, model } = require("../connection");

const schema = new Schema({
  date: Date,
  heading: { type: String, required: true },
  content: { type: String, required: true},
  image:{type:String},
  
  });


module.exports = model("news", schema);
