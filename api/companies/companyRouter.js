const router = require('express').Router();
const { Companies } = require('../../data/helpers/index');
const { validateToken } = require('../middlewares/index');

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

// Return a specific company profile at id, available to all users
router.get('/:id', validateToken, (req, res) => {
    const ids = req.params.id;
    Companies
        .findById(ids)
        .then(result => {
            if(result) {
                res.status(200).json(result)
            }
            else {
                res.status(400).json({ message: 'no company corresponding to this id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get company at this id', err })
        })
})


// Post a company profile to list, available to companies only
// Need to be logged in, has to be company user
// Need to verify content of company profiles
router.post('/', validateToken, (req, res) => {
    const newCompany = req.body;
    Companies
        .add(newCompany)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ message: 'error adding comanpy', err}));
})

// Update a company profile, available to owner of the profile only
// Need to be logged in(with a token), has to be company user, company id should be valid, and should be owner of company
// Also need to verify content of company profile
router.put('/:id', validateToken, (req, res) => {
    const ids = req.params.id;
    const companyUpdates = req.body;

    Companies
        .edit(ids, companyUpdates)
        .then(result => {
            res.status(204).json(result)
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to update company profile', err})
        })

})

// Return all likes for this company, available to owner of the profile id only
// Don't work on this yet, still thinking about its specifics
router.get('/:id/likes', (req, res) => {
    const ids = req.params.id;
})

// Like a specific company, available to all users
// Don't work on this yet, still thinking about its specifics
router.post('/:id/likes', (req, res) => {
    const ids = req.params.id;
})

module.exports = router;