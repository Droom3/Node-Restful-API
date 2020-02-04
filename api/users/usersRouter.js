const router = require('express').Router();
const { Users } = require('../../data/helpers/index');
const { validateToken, validateIamUser } = require('../middlewares/index');

// Return a list of all user profiles, available to all users
router.get('/', validateToken, (req, res) => {
    Users
        .find()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to retrieve all users', err})
        })
})

// Return a specific user profile at id, available to all users
router.get('/:id', validateToken, (req, res) => {
    const ids = req.params.id;
    Users
        .findById(ids)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get user at this id', err })
        })
})

// Update a user profile, available to owner of the profile only
router.put('/:id', validateToken, validateIamUser, (req, res) => {
    const ids = req.params.id;
    const changes = req.body;

    Users
        .edit(ids, changes)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ message: 'failed to update user.', err}))
})

// Return all likes for this user, available to owner of the profile id only
// Don't work on this yet, still thinking about its specifics
router.get('/:id/likes', (req, res) => {

})


module.exports = router;