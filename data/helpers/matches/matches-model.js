const Matches = require('../../dbConfig');

// Find all of an user's likes
function findMatchingCompanies(id) {
    return Matches('match')
        .select('companies.id as company_id', 'companies.company_name as company_name', 'companies.description as company_description')
        .join('companies', 'match.company_id', 'companies.id')
        .where({ user_id: id, initiated_by: 1 })
        .orderBy('match.company_id', 'asc');
}

// Find all of a company's likes
function findMatchingUsers(id) {
    console.log('finding liked users');
    return Matches('match')
        .select('users.id as user_id', 'users.name as user_name', 'users.experience as user_experience')
        .join('users', 'match.user_id', 'users.id')
        .where({ company_id: id, initiated_by: 0 })
        .orderBy('match.user_id', 'asc')
}

// add a user like/match
function addMatch(userId, companyId, init) {
    console.log('userId is ', userId)
    console.log('companyId is ', companyId)
    return Matches('match')
        .insert({user_id: userId, company_id: companyId, initiated_by: init})
        .then(ids => {
            if(init === 0){
                return findMatchingUsers(companyId);
            } else {
                return findMatchingCompanies(userId);
            }
        });
}

// Find mutual likes
function findMutualLikes(id) {

}

function removeMatch(user, company, init){
    return Matches('match')
        .where({ user_id: user, company_id: company, initiated_by: init})
        .del()
}

module.exports = {
    findMatchingUsers,
    findMatchingCompanies,
    addMatch,
    removeMatch
}
