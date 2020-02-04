function validateIamUser(req, res, next) {
    const token_id = parseInt(req.decoded_token.id);
    const param_id = parseInt(req.params.id);

    if(token_id === param_id) {
        next();
    }
    else {
        res.status(400).json({ message: 'sorry, you can\'t update another user.' })
    }
}

module.exports = validateIamUser;