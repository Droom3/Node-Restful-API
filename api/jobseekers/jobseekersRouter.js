const router = require('express').Router();
const {  } = require('../../data/helpers/index');
const {  } = require('../middlewares/index');

router.post('/register', verifyNewUser, (req, res) => {

})

router.post('/login', verifyReturnUser, (req, res) => {

})


module.exports = router;