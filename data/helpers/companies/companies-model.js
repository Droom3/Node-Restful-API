const Companies = require('../../dbConfig');

function find() {
    return Companies('companies')
        .select('id', 'username', 'user_type', 'company_name', 'description', 'industry', 'mission_statement', 'imgUrl', 'openPositions')
        .orderBy('id', 'asc');
}

function findByUsername(property) {
    return Companies('companies')
        .where({ username: property })
        .first();
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
            const [id] = ids;
            return findById(id);
        });
}

function edit(id, changes) {
    return Companies('companies')
        .where({ id })
        .update(changes, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function remove(id) {
    return Companies('companies')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findByUsername,
    findById,
    add,
    edit,
    remove
}