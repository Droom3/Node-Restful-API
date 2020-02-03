const verifyNewUser = require('./auth/verifyNewUser');
const verifyReturnUser = require('./auth/verifyReturnUser');
const validateToken = require('./auth/validateToken');
const checkUserType = require('./auth/checkUserType');

module.exports = {
    verifyNewUser,
    verifyReturnUser,
    validateToken,
    checkUserType
}