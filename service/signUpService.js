const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')
const User = require('../model/Users')

function generateJWT(email) {
    const token = jwt.sign({ _email: email }
        , config.get("jwtPrivateKey"))
    return token;
}

function signUp(userName, email, password) {
    saveUser(userName, email, password)
    return generateJWT(email)
}
async function saveUser(userName, email, password) {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({
        userName: userName,
        email: email,
        password: hashedPassword
    });
    const result = await user.save();
    console.log(result);
}

module.exports = { signUp }
