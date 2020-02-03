const Companies = require('../../dbConfig');

function find() {
    return Companies('companies')
        .select('user_id', 'company_name', 'description')
        .orderBy('user_id', 'asc');
}

function findById(id) {
    const [ids] = id;
    return Companies('companies')
        .where({ ids })
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

module.exports = {
    find,
    findById,
    add,
    edit
}