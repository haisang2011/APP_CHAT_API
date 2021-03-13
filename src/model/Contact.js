const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    UserId:  Schema.Types.ObjectId, // String is shorthand for {type: String}
    contactId: Schema.Types.ObjectId,
    status: { type: Boolean, default: false },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deleteAt: { type: Number, default: null }
})

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;