const router = require('express').Router();
const { Matches } = require('../../data/helpers/index');
const { validateToken, checkIsUser } = require('../middlewares/index');


// retrive a list of like of the validated user
router.get('/', validateToken, (req, res) => {
    //convert user_type 1 to boolean
    const userType = !!+req.decoded_token.user_type;
    
    if(userType === true){
        //if user return a list of matched/liked companies
        Matches
            .findMatchingCompanies(req.decoded_token.id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(500).json({ message: 'error retrieving matches', err}))
    } else {
        //if company return a list of matched/liked users
        Matches
            .findMatchingUsers(req.decoded_token.id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(500).json({ message: 'error retrieving matches', err}))
    }  
})

// Like a specific company, available to all users
// Don't work on this yet, still thinking about its specifics
// {userId: 1, likeId: 24} } // userId: logged in user, likeId: company/user to match/like
router.post('/:id', validateToken, (req, res) => {
    const userId = req.decoded_token.id;
    const likeId = req.params.id;
    const userType = !!+req.decoded_token.user_type;

    const user = userType ? userId : likeId;
    const like = userType ? likeId : userId;
    const init = userType ? 1 : 0;

    Matches.addMatch(user, like, init)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ message: 'failed to add a match', err}))
})

//
router.delete('/:id', validateToken, (req, res) => {
    const userId = req.decoded_token.id; // authenticated user
    const likeId = req.params.id;   // user/company to remove like/match
    const userType = !!+req.decoded_token.user_type;  // user type 0 - company : 1 - user

    const user = userType ? userId : likeId;
    const like = userType ? likeId : userId;
    const init = userType ? 1 : 0;

    Matches
        .removeMatch(user, like, init)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ message: 'error removing match', err}));
})

module.exports = router;