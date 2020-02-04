const { Users } = require('../../../data/helpers/index');

function validateUserId(req, res, next) {
    const param_id = parseInt(req.params.id);

    Users
        .findById(param_id)
        .then(result => {
            if(result && Object.entries(result).length) {
                next();
            }
            else {
                res.status(400).json({ message: 'selected id does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = validateUserId;