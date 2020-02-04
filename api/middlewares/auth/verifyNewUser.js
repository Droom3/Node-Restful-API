async function verifyNewUser(req, res, next){
    const { username, password, user_type, name } = req.body;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[`~!@#$%^&*()_=<+>?=.,]).{8,20}$/i;

    if(!Object.entries(req.body).length) {
        return res.status(400).json({ message: 'invalid action, you must provide new user credentials' })
    }
    if(!username || !password || !name) {
        return res.status(400).json({ message: 'you must provide username, password, and name' })
    }
    if(!username.length || !password.length || !name.length) {
        return res.status(400).json({ message: 'username, password, and name must not be blank' })
    }
    if(Boolean(user_type)===false) {
        return res.status(400).json({ message: 'you are not a jobseeking user '})
    }
    if(!passwordPattern.test(password)) {
        return res.status(400).json({ message: 'password must include a number, special character, and be between 8 and 20 characters' });
    }
    next();
}

module.exports = verifyNewUser;