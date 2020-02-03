const router = require('express').Router();
const {  } = require('../../data/helpers/index');
const {  } = require('../middlewares/index');

// Return a list of all jobseeker profiles, available to all users
router.get('api/jobseekers', (req, res) => {

})

// Post a jobseeker profile to list, available to jobseekers only
router.post('api/jobseekers', (req, res) => {

})

// Return a specific jobseeker profile at id, available to all users
router.get('api/jobseekers/:id', (req, res) => {

})

// Update a jobseeker profile, available to owner of the profile only
router.put('api/jobseekers/:id', (req, res) => {

})

// Return all likes for this jobseeker, available to owner of the profile id only
// Don't work on this yet, still thinking about its specifics
router.get('api/jobseekers/:id/likes', (req, res) => {

})

// Like a specific jobseeker, available to all users
// Don't work on this yet, still thinking about its specifics
router.post('api/jobseekers/:id/likes', (req, res) => {

})

module.exports = router;