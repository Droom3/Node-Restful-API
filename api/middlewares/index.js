const verifyNewUser = require('./auth/verifyNewUser');
const verifyReturnUser = require('./auth/verifyReturnUser');
const verifyNewCompany = require('./auth/verifyNewCompany')
const verifyUniqueName = require('./auth/verifyUniqueName');
const validateToken = require('./auth/validateToken');
const checkIsCompany = require('./companies/checkIsCompany');
const validateCompanyId = require('./companies/validateCompanyId');
const validateCompanyOwner = require('./companies/validateCompanyOwner');
const validateCompanyChanges = require('./companies/validateChanges');

module.exports = {
    verifyNewUser,
    verifyNewCompany,
    verifyReturnUser,
    verifyUniqueName,
    validateToken,
    checkIsCompany,
    validateCompanyId,
    validateCompanyOwner,
    validateCompanyChanges
}