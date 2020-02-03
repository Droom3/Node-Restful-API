const { Users } = require('../../../data/helpers/index');

function validateOwnership(req, res, next) {
    const user_id = parseInt(req.decoded_token.id);
    const param_id = parseInt(req.params.id);

    Users
        .findById(param_id)
        .then(user => {
            if(user.id === user_id) {
                next();
            }
            else {
                res.status(400).json({ message: 'improper token, not authorized' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}