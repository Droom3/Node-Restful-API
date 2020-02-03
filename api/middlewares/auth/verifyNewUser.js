const { Roles } = require('../../../data/helpers');

async function verifyNewUser(req, res, next){
    const { username, password, user_type } = req.body;
    if(!Object.entries(req.body).length) {
        return res.status(400).json({ message: 'invalid action, you must provide new user credentials' })
    }
    if(!username || !password || !user_type) {
        return res.status(400).json({ message: 'you must provide username, password, and user_type' })
    }
    if(!username.length || !password.length) {
        return res.status(400).json({ message: 'username, password must not be blank' })
    }
    if(!await Roles.findBy({ id: user_type })) {
        return res.status(400).json({ message: 'the given usertype does not exist' })
    }
    next();
}

module.exports = verifyNewUser;