const { Schema, model } = require("../connection");

const schema = new Schema({
 
  heading: { type: String, required: true },
  content: { type: String, required: true},
  image:{type:String},
  category:{type:String},
  date: Date,
  });


module.exports = model("news", schema);
