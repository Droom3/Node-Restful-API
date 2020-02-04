function checkIsUser(req, res, next) {
    const user_type = parseInt(req.decoded_token.user_type);
    if(parseInt(user_type)===1) {
        next();
    }
    else {
        res.status(400).json({ message: 'you are not a user or jobseeker', stuff: parseInt(user_type) })
    }
}

module.exports = checkIsUser;