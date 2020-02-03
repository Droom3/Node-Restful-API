const { Roles } = require('../../../data/helpers/index');

const checkUserType = role => {
    return (req, res, next) => {
        const { user_type } = req.decoded_token;
        Roles
            .findBy({ id: user_type })
            .then(result => {
                if(result.name === role) {
                    next();
                }
                else {
                    res.status(403).json({ message: 'your role is not authorized to perform this action' })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = checkUserType;