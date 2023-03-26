const { Schema, model, Types } = require("../connection");

const schema = new Schema({
    users: [{ type: Types.ObjectId, required: true }],
    // reciever: { type: Types.ObjectId, required: true },
    sentBy: { type: Types.ObjectId, required: true },
    message: Object,
    date: Date,
    read: {type : Boolean, default: false},
    name: String
});


module.exports = model("ChatMessageData", schema);
