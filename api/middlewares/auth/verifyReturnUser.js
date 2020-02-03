function verifyReturnUser(req, res, next){
    const { username, password } = req.body;

    if(!Object.entries(req.body).length) {
        return res.status(400).json({ message: 'invalid action, you must provide user credentials' })
    }
    if(!username || !password) {
        return res.status(400).json({ message: 'you must provide username and password' })
    }
    if(!username.length || !password.length) {
        return res.status(400).json({ message: 'username, password must not be blank' })
    }
    next();
}

module.exports = verifyReturnUser;