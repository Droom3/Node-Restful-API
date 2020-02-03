const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users } = require('../../data/helpers/index');
const { verifyNewUser, verifyReturnUser } = require('../middlewares/index');

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

router.post('/login', verifyReturnUser, (req, res) => {
    res.status(201).json({ message: 'welcome logging in' })
    // const { username, password } = req.body;
    // Users
    //     .findBy({ username })
    //     .then(user => {
    //         if(user && bcrypt.compareSync(password, user.password)) {
    //             const token = generateToken(user);
    //             const response = {
    //                 user,
    //                 token
    //             }
    //             res.status(201).json(response)
    //         }
    //         else {
    //             res.status(400).json({ message: 'invalid username or password' })
    //         }
    //     })
    //     .catch(err => {
    //         res.status(500).json(err);
    //     })
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