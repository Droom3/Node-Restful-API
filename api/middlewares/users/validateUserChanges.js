async function validateUserChanges(req, res, next) {
    const { id, username, password, name } = req.body;
    if(username || password || id || 'user_type' in req.body ) {
        return res.status(400).json({ message: 'you cannot modify id, username, user_type, or password' })
    }
    if(!Object.entries(name)) {
        return res.status(400).json({ message: 'at least provide your name' })
    }
    if(!name.length) {
        return res.status(400).json({ message: 'name must not be blank' })
    }
    else {
        next();
    }
}

module.exports = validateUserChanges;