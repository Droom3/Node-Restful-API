// Auth middlewares
const verifyNewUser = require('./auth/verifyNewUser');
const verifyReturnUser = require('./auth/verifyReturnUser');
const verifyNewCompany = require('./auth/verifyNewCompany')
const verifyUniqueName = require('./auth/verifyUniqueName');
const validateToken = require('./auth/validateToken');
// Company middlewares
const checkIsCompany = require('./companies/checkIsCompany');
const validateCompanyId = require('./companies/validateCompanyId');
const validateCompanyOwner = require('./companies/validateCompanyOwner');
const validateCompanyChanges = require('./companies/validateChanges');
// User middlewares
const validateIamUser = require('./users/validateIamUser');

module.exports = {
    verifyNewUser,
    verifyNewCompany,
    verifyReturnUser,
    verifyUniqueName,
    validateToken,
    checkIsCompany, // Company only
    validateCompanyId, // Company only
    validateCompanyOwner, // Company only
    validateCompanyChanges, // Company only
    validateIamUser
}