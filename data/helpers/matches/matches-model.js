const Matches = require('../../dbConfig');

// Find all of an user's likes
function findMatchingCompanies(id) {
    return Matches('match')
        .select('companies.company_name as company_nane', 'companies.description as company_description')
        .join('companies', 'match.company_id', 'companies.id')
        .where({ user_id: id })
        .orderBy('match.company_id', 'asc');
}

// Find all of a company's likes
function findMatchingUsers(id) {
    return Matches('match')
        .select('users.name as user_name', 'users.experience as user_experience')
        .join('users', 'match.user_id', 'users.id')
        .where({ company_id: id })
        .orderBy('match.user_id', asc)
}

// Find mutual likes
function findMutualLikes(id) {

}

module.exports = {
    findMatchingUsers,
    findMatchingCompanies
}
