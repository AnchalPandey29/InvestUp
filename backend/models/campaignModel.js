const { Schema, model } = require("../connection");

const schema = new Schema({
  startdate: { Date },
  lastdate: {Date},
  heading: { type: String, required: true },
  content: { type: String, required: true},
  created_at:{Date},
  });


module.exports = model("campaign", schema);
