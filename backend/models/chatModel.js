const { Schema, model, Types } = require("../connection");

const schema = new Schema({
    sender: { type: Types.ObjectId, required: true },
    reciever: { type: Types.ObjectId, required: true },
    date: Date,
    message: String
});


module.exports = model("Chat", schema);
