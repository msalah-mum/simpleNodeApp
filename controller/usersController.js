const usersService = require('../service/signUpService')

const userSignUpController = (req, res, next) => {
    const user = req.body
    const token = usersService.signUp(user.userName, user.email, user.password);
    res.status(200).send(token);
}

module.exports = { userSignUpController }