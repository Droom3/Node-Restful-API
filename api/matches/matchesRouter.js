const router = require('express').Router();
const { Matches } = require('../../data/helpers/index');
const { validateToken } = require('../middlewares/index');

// Like a specific company, available to all users
// Don't work on this yet, still thinking about its specifics
router.post('/:id/likes', validateToken, (req, res) => {
    const ids = req.params.id;
})

module.exports = router;