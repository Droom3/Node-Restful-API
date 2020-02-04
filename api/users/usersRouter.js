const router = require('express').Router();
const { Users, Companies } = require('../../data/helpers/index');
const { validateToken } = require('../middlewares/index');

// Return a list of all jobseeker profiles, available to all users
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

// Post a jobseeker profile to list, available to users only
router.post('/', (req, res) => {

})

// Return a specific jobseeker profile at id, available to all users
router.get('/:id', validateToken, validateJobseekerId, (req, res) => {
    const ids = req.params.id;
    Users
        .findById(ids)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get jobseeker at this id', err })
        })
})

// Update a jobseeker profile, available to owner of the profile only
router.put('/:id', (req, res) => {

})

// Return all likes for this jobseeker, available to owner of the profile id only
// Don't work on this yet, still thinking about its specifics
router.get('/:id/likes', (req, res) => {

})

// Like a specific jobseeker, available to all users
// Don't work on this yet, still thinking about its specifics
router.post('/:id/likes', (req, res) => {

})

module.exports = router;