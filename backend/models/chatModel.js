const { Schema, model, Types } = require("../connection");

const schema = new Schema({
    sender: { type: Types.ObjectId, required: true },
    reciever: { type: Types.ObjectId, required: true },
    data: Object,
    read: {type : Boolean, default: false}
});


module.exports = model("Chat", schema);