const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatGroupSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    userAmount: { type: Number, min: 3, max: 100 },
    messageAmount: { type: Number, default: 0 },
    userId: Schema.Types.ObjectId,
    members: [Schema.Types.ObjectId],
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deleteAt: { type: Number, default: null }
})

const ChatGroup = mongoose.model('chatgroups', chatGroupSchema);

module.exports = ChatGroup;