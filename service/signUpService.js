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

async function signIn(email, password) {
    console.log("enter ----------: ")
    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.findOne({ "email": email });


    console.log("passed ----------: ", user)
    //console.log("passed ----------: ", hashedPassword)

    if (!user) {
        console.log("passed ----------: ", user)
        return false
    }
    else {
        console.log("failed -----------", generateJWT(email))
        const hash = user.password
        if (bcrypt.compareSync(password, hash)) return generateJWT(email);
        else return false
    }


}
async function saveUser(userName, email, password) {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({
        "userName": userName,
        "email": email,
        "password": hashedPassword
    });
    const result = await user.save();
    console.log(result);
}

module.exports = { signUp, signIn }
