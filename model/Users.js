const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:123@cluster0-gxapi.mongodb.net/feedMe?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch(() => console.log('DB connection failed'))

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;