const Roles = require('../../dbConfig');

function find() {
    return Roles('roles')
        .orderBy('user_id', 'asc');
}

function findBy(property) {
    return Roles('roles')
        .where(property)
        .first();
}

module.exports = {
    find,
    findBy
}