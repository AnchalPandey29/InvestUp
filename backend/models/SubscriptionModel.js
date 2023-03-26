const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  user: { type: Types.ObjectId, ref: "startup" },
  startDate: Date,
  endDate: Date,
  duration: String,
  data: Object,
});

module.exports = model("subscription", schema);
