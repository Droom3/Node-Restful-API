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
const validateCompanyChanges = require('./companies/validateCompanyChanges');
// User middlewares
const checkIsUser = require('./users/checkIsUser');
const validateUserId = require('./users/validateUserId');
const validateUserOwner = require('./users/validateUserOwner');
const validateUserChanges = require('./users/validateUserChanges');

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
    checkIsUser, // User only
    validateUserId, // User only
    validateUserOwner, // User only
    validateUserChanges // User only
}