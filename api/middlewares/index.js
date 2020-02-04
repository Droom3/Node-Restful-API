const verifyNewUser = require('./auth/verifyNewUser');
const verifyReturnUser = require('./auth/verifyReturnUser');
const verifyNewCompany = require('./auth/verifyNewCompany')
const verifyUniqueName = require('./auth/verifyUniqueName');
const validateToken = require('./auth/validateToken');

module.exports = {
    verifyNewUser,
    verifyNewCompany,
    verifyReturnUser,
    verifyUniqueName,
    validateToken,
}