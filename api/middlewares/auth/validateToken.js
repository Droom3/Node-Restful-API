const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const secret = process.env.JWT_SECRET;
    if(!authorization) {
        res.status(400).json({ message: 'no authorization header attached' })
    }
    jwt.verify(authorization, secret, (error, decoded) => {
        if(error) {
            res.status(404).json({ error });
        }
        else {
            req.decoded_token = decoded;
            next();
        }
    })
};