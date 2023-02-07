const { Schema, model } = require("../connection");

const schema = new Schema({
  date: { Date },
  heading: { type: String, required: true },
  content: { type: string, required: true},
  image:{type:String},
  
  });


module.exports = model("news", schema);
