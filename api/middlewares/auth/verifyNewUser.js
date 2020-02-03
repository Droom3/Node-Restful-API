const verifyNewUser = (req, res, next) => {
    const newUser = req.body;
    if(!Object.entries(newUser).length) {
        res.status(400).json({ message: 'invalid action, you must provide new user credentials' })
    }
    if(!newUser.username || !newUser.password || !newUser.user_type) {
        res.status(400).json({ message: 'you must provide username, password, and user_type' })
    }
    if(!newUser.username.length || !newUser.password.length) {
        res.status(400).json({ message: 'username, password must not be blank' })
    }
    if(newUser.user_type!==1 || newUser.user_type!==2) {
        res.status(400).json({ message: 'user_type must be 1 or 2' })
    }
    next();
}

module.exports = verifyNewUser;