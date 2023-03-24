const { Schema, model } = require("../connection");

const schema = new Schema({
  startdate: Date,
  lastdate: Date,
  title: { type: String, required: true },
  content: { type: String, required: true},
  image:{type:String},
  created_at:Date,
  category:{type:String},
  });


module.exports = model("campaign", schema);
