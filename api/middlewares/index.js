const verifyNewUser = require('./auth/verifyNewUser');
const verifyReturnUser = require('./auth/verifyReturnUser');
const validateToken = require('./auth/validateToken');
const checkUserType = require('./auth/checkUserType');
const validateOwnership = require('./auth/validateOwnership');
const validateJobseekerId = require('./jobseekers/validateJobseekerId');
const validateCompanyId = require('./companies/validateCompanyId');

module.exports = {
    verifyNewUser,
    verifyReturnUser,
    validateToken,
    checkUserType,
    validateOwnership,
    validateJobseekerId,
    validateCompanyId
}