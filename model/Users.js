const mongoose = require('mongoose');

mongoose.connect('')
    .then(() => console.log('DB connected'))
    .catch(() => console.log('DB connection failed'))

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;