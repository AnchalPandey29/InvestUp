const { Schema, model } = require("../connection");

const schema = new Schema({
  username: { type:String,required:true },
  startdate:{Date},
  enddate:{Date},
  duration:{type:String},
  
  });


module.exports = model("subscription", schema);
