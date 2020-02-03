const router = require('express').Router();
const { Users, Jobseekers, Companies, Jobs } = require('../../data/helpers/index');
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
router.post('/', validateToken, (req, res) => {
    const newCompany = req.body;
    Companies
        .add(newCompany)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ message: 'error adding comanpy', err}));
})

// Return a specific company profile at id, available to all users
router.get('/:id', validateToken, (req, res) => {
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

// Return all jobs of a company, available to all users
router.get('/:id/jobs', validateToken, (req, res) => {
    const ids = req.params.id;

    Jobs.jobByCompany(ids)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ message: 'failed to retrieve list of jobs', err}))
})

// Post a job to a specific company, available to this company only
router.post('/:id/jobs', validateToken, (req, res) => {
    const newJob = req.body;

    Jobs.add(newJob)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ message: 'failed to post a companys job', err}))
})

// Return a specific job from a specific company, available to all users
router.get('/:id/jobs/:id2', validateToken, (req, res) => {
    const companyId = req.params.id;
    const jobId = req.params.id2;

    Jobs.getCompanyJob(companyId, jobId)
        .then(result => {
            if(result){
                res.status(200).json(result)
            } else {
                res.status(404).json({ message: 'job does not exists'})
            }
        })
        .catch(err => res.status(500).json({ message: 'failed to retrieve selected job', err}))
})

// Update a specific job from a specific company, available this company only
router.put('/:id/jobs/:id2', validateToken, (req, res) => {
    const jobId = req.params.id2;
    const changes = req.body;

    Jobs.edit(jobId, changes)
        .then(result => res.status(204).json(result))
        .catch(err => res.status(500).json({ message: 'unable to update job', err}))
    
})

// Delete a specific job from a specific company, available to this company only
router.delete('/:id/jobs/:id2', (req, res) => {
    const companyId = req.params.id;
    const jobId = req.params.id2;

    Jobs.remove(jobId)
    .then(result => res.status(200).json({ message: 'The job has been removed' }))
    .catch(err => res.status(500).json({ message: 'Error deleting job posting', err}))
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