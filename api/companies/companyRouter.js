const router = require('express').Router();
const { Users, Jobseekers, Companies } = require('../../data/helpers/index');
const { validateToken, checkUserType, validateOwnership, validateCompanyId } = require('../middlewares/index');

// Return a list of all companies profiles, available to all users
router.get('/', validateToken, (req, res) => {
    Companies
        .find()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// Post a company profile to list, available to companies only
router.post('/', (req, res) => {

})

// Return a specific company profile at id, available to all users
router.get('/:id', validateToken, validateCompanyId, (req, res) => {
    const ids = req.params.id;
    Companies
        .findById(ids)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get company at this id', err })
        })
})

// Update a company profile, available to owner of the profile only
router.put('/:id', (req, res) => {

})

// Return all jobs of a company, available to all users
router.get('/:id/jobs', (req, res) => {

})

// Post a job to a specific company, available to this company only
router.post('/:id/jobs', (req, res) => {

})

// Return a specific job from a specific company, available to all users
router.get('/:id/jobs/:id2', (req, res) => {

})

// Update a specific job from a specific company, available this company only
router.put('/:id/jobs/:id2', (req, res) => {

})

// Delete a specific job from a specific company, available to this company only
router.delete('/:id/jobs/:id2', (req, res) => {

})

// Return all likes for this company, available to owner of the profile id only
// Don't work on this yet, still thinking about its specifics
router.get('/:id/likes', (req, res) => {

})

// Like a specific company, available to all users
// Don't work on this yet, still thinking about its specifics
router.post('/:id/likes', (req, res) => {

})

module.exports = router;