const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users } = require('../../data/helpers/index');
const { verifyNewUser } = require('../middlewares/index');

router.post('/register', verifyNewUser, (req, res) => {
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hash;
    Users
        .add(newUser)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(() => {
            res.status(500).json({ message: 'failed to create user' })
        })
})

router.post('/login', (req, res) => {
    res.status(201).json({ message: 'Good Bye friend' })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        usertype: user.user_type
    };
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options)
}

module.exports = router;