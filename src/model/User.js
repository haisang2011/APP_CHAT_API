const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    gender: { type: String, default: 'Male' },
    phone:   { type: String, default: null },
    address: { type: String, default: null },
    avatar: { type: String, default: 'avatar-default.jpg' },
    // role: { type: String, default: 'user' },
    local: {
      email: { type: String, trim: true },
      password:  String,
      // isActive: { type:Boolean, default: false },
      verifyToken: String,  
    },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deleteAt: { type: Number, default: null }
})

const User = mongoose.model('users', userSchema);

module.exports = User;