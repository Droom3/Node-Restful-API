const router = require('express').Router();
const { Users } = require('../../data/helpers/index');
const { validateToken, checkIsUser, validateUserId, validateUserOwner, validateUserChanges } = require('../middlewares/index');

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
            if(result) {
                res.status(200).json(result)
            }
            else {
                res.status(400).json({ message: 'no user corresponding to this id' })
            }    
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get user at this id', err })
        })
})

// Update a user profile, available to owner of the profile only
router.put('/:id', validateToken, checkIsUser, validateUserId, validateUserOwner, validateUserChanges, (req, res) => {
    const ids = req.params.id;
    const changes = req.body;
    Users
        .change(ids, changes)
        .then(result => {
            if(result) {
                res.status(200).json(result)
            }
            else {
                res.status(400).json({ message: 'no user corresponding to this id' })
            }
        })
        .catch(err => res.status(500).json({ message: 'failed to update user.', err}))
})

router.delete('/:id', validateToken, checkIsUser, validateUserId, validateUserOwner, (req, res) => {
    const ids = req.params.id;
    Users
        .remove(ids)
        .then(() => {
            res.status(200).json({ message: `user account ${ids} deleted` })
        })
        .catch(() => {
            res.status(500).json({ message: 'unable to delete user account' })
        })
})

module.exports = router;