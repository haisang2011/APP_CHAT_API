const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    senderId:  Schema.Types.ObjectId, // String is shorthand for {type: String}
    receiverId: Schema.Types.ObjectId,
    conversationType: String,
    messageType: String,
    text: String,
    file: {
        data: Buffer,
        contentType: String,
        fileName: String
    },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deleteAt: { type: Number, default: null }
})

const Message = mongoose.model('messages', messageSchema);

module.exports = Message;