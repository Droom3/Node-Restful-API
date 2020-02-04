const Companies = require('../../dbConfig');

function find() {
    return Companies('companies')
        .select('id', 'username', 'user_type', 'company_name', 'description', 'industry', 'mission_statement', 'imgUrl', 'openPositions')
        .orderBy('id', 'asc');
}

function findById(id) {
    return Companies('companies')
        .select('id', 'username', 'user_type', 'company_name', 'description', 'industry', 'mission_statement', 'imgUrl', 'openPositions')
        .where({ id })
        .first();
}

function add(company) {
    return Companies('companies')
        .insert(company, 'id')
        .then(ids => {
            return findById(ids);
        });
}

function edit(id, changes) {
    return Companies('companies')
        .where({ id })
        .update(changes, 'id')
        .then(ids => {
            return findById(ids);
        });
}

function remove(id) {
    return Companies('companies')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findById,
    add,
    edit,
    remove
}