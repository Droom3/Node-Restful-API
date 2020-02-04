function checkIsUser(req, res, next) {
    const user_type = req.decoded_token.user_type;
    if(user_type===true) {
        next();
    }
    else {
        res.status(400).json({ message: 'you are not a user or jobseeker', stuff: user_type })
    }
}

module.exports = checkIsUser;