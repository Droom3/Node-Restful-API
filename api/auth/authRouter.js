const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users, Companies } = require('../../data/helpers/index');
const { verifyNewUser, verifyNewCompany, verifyReturnUser, verifyUniqueName } = require('../middlewares/index');

// verifyNewUser ensures the user has all the required fields
// checkUniqueName ensures the username is not taken by either Users or Companies
router.post('/register/user', verifyNewUser, verifyUniqueName, (req, res) => {
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

router.post('/register/company', verifyNewCompany, verifyUniqueName, (req, res) => {
    const newCompany = req.body;
    const hash = bcrypt.hashSync(newCompany.password, 10);
    newCompany.password = hash;
    Companies
        .add(newCompany)
        .then(company => {
            res.status(201).json(company);
        })
        .catch(() => {
            res.status(500).json({ message: 'failed to create user' })
        })
})

router.post('/login', verifyReturnUser, (req, res) => {
    const { username, password } = req.body;

    Users.findByUsername(username).then(user => {
        if(user) {
            if(bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                const response = {
                    user,
                    token
                }
            res.status(201).json(response)
            }
            else {
                res.status(400).json({ message: 'invalid username or password' })
            }
        }
        else {
            Companies.findByUsername(username).then(company => {
                if(company) {
                    if(bcrypt.compareSync(password, company.password)) {
                        const token = generateToken(company);
                        const response = {
                            company,
                            token
                        }
                    res.status(201).json(response)
                    }
                }
                else {
                    res.status(400).json({ message: 'invalid username or password' })
                }
            })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'internal server error', err })
    })
})

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
        user_type: user.user_type
    };
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options)
}

module.exports = router;