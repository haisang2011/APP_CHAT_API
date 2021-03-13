const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    senderId:  Schema.Types.ObjectId, // String is shorthand for {type: String}
    receiverId: Schema.Types.ObjectId,
    type: String,
    isRead: { type: Boolean, default: false },
    text: String,
    createdAt: { type: Number, default: Date.now },
})

const Notification = mongoose.model('notifications', notificationSchema);

module.exports = Notification;