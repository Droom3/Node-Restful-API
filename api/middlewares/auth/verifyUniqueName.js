const { Users, Companies } = require('../../../data/helpers/index')

function verifyUniqueName(req, res, next){
    const { username } = req.body;

    Users
        .findByUsername(username)
        .then(result => {
            if(result) {
                res.status(400).json({ message: 'username already taken '})
            }
            else {
                Companies
                    .findByUsername(username)
                    .then(company => {
                        if(company) {
                            res.status(400).json({ message: 'username already taken' })
                        }
                        else {
                            next();
                        }
                    })
                    .catch(err => {
                        res.status(400).json({ message: 'server error', err })
                    })
            }
        })
        .catch(err => {
            res.status(400).json({ message: 'server error', err })
        })
}

module.exports = verifyUniqueName;