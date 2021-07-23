const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: 'Please leave a message.',
        minlength: 1
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;