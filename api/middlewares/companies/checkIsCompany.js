function checkIsCompany(req, res, next) {
    const user_type = parseInt(req.decoded_token.user_type);
    if(Boolean(user_type)===false) {
        next();
    }
    else {
        res.status(400).json({ message: 'you are not a company' })
    }
}

module.exports = checkIsCompany;