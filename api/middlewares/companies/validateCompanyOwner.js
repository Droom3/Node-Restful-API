// const { Companies } = require('../../../data/helpers/index');

// function validateCompanyOwner(req, res, next) {
//     const user_type = parseInt(req.decoded_token.id);
//     const param_id = parseInt(req.params.id);

//     Companies
//         .findById(param_id)
//         .then(company => {
//             if(user.id === user_id) {
//                 next();
//             }
//             else {
//                 res.status(400).json({ message: 'improper token, not authorized' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })
// }