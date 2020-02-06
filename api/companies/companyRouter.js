const router = require('express').Router();
const { Companies } = require('../../data/helpers/index');
const { validateToken, checkIsCompany, validateCompanyId, validateCompanyOwner, validateCompanyChanges } = require('../middlewares/index');

// Return a list of all companies profiles, available to users
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

// Return a specific company profile at id, available to users
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

// Update a company profile, available to owner of the profile only
// Need to be logged in(with a token), has to be company user, company id should be valid, and should be owner of company
// Also need to verify content of company profile
router.put('/:id', validateToken, checkIsCompany, validateCompanyId, validateCompanyOwner, validateCompanyChanges, (req, res) => {
    const ids = req.params.id;
    const companyUpdates = req.body;
    Companies
        .change(ids, companyUpdates)
        .then(result => {
            if(result) {
                res.status(200).json(result)
            }
            else {
                res.status(400).json({ message: 'no company corresponding to this id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to update company profile', err})
        })
})

router.delete('/:id', validateToken, checkIsCompany, validateCompanyId, validateCompanyOwner, (req, res) => {
    const ids = req.params.id;
    Companies
        .remove(ids)
        .then(() => {
            res.status(200).json({ message: `company account ${ids} deleted` })
        })
        .catch(() => {
            res.status(500).json({ message: 'unable to delete company account' })
        })
})

module.exports = router;