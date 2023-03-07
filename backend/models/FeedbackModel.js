const { Schema, model, Types } = require("../connection");

const schema = new Schema({
    content: { type: String, required: true},
    created_at:Date,
    rating:Number,
    user : {type : Types.ObjectId, ref: 'startup'},
    startup : {type : Types.ObjectId, ref: 'startup'},
    
  });


module.exports = model("feedback", schema);
