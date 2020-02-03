const router = require('express').Router();
const { Jobs, Jobseekers, Companies } = require('../../data/helpers/index');
const { validateToken } = require('../middlewares/index');

// Returns all jobs, available to all users
router.get('/', validateToken, (req, res) => {
    Jobs
        .find()
        .then(jobs => {
            res.status(200).json(jobs)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;