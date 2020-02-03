const router = require('express').Router();
//const {  } = require('../../data/helpers/index');
//const {  } = require('../middlewares/index');

// Return a list of all companies profiles, available to all users
router.get('api/companies', (req, res) => {

})

// Post a company profile to list, available to companies only
router.post('api/companies', (req, res) => {

})

// Return a specific company profile at id, available to all users
router.get('api/companies/:id', (req, res) => {

})

// Update a company profile, available to owner of the profile only
router.put('api/companies/:id', (req, res) => {

})

// Return all jobs of a company, available to all users
router.get('api/companies/:id/jobs', (req, res) => {

})

// Post a job to a specific company, available to this company only
router.post('api/companies/:id/jobs', (req, res) => {

})

// Return a specific job from a specific company, available to all users
router.get('api/companies/:id/jobs/:id2', (req, res) => {

})

// Update a specific job from a specific company, available this company only
router.put('api/companies/:id/jobs/:id2', (req, res) => {

})

// Delete a specific job from a specific company, available to this company only
router.delete('api/companies/:id/jobs/:id2', (req, res) => {

})

// Return all likes for this company, available to owner of the profile id only
// Don't work on this yet, still thinking about its specifics
router.get('api/companies/:id/likes', (req, res) => {

})

// Like a specific company, available to all users
// Don't work on this yet, still thinking about its specifics
router.post('api/companies/:id/likes', (req, res) => {

})

module.exports = router;