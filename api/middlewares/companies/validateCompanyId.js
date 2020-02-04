const { Companies } = require('../../../data/helpers/index');

function validateCompanyId(req, res, next) {
    const param_id = parseInt(req.params.id);

    Companies
        .findById(param_id)
        .then(result => {
            if(result && Object.entries(result).length) {
                next();
            }
            else {
                res.status(400).json({ message: 'company with this id does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = validateCompanyId;