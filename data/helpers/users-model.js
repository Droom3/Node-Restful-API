const Users = require('../dbConfig');

function find() {
    return Users('users')
        .select('id', 'username', 'occupation')
        .orderBy('id', 'asc');
}

function findById(id) {
    const [ids] = id;
    return Users('users')
        .where({ ids })
        .first();
}

function add(user) {
    return Users('users')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids);
        });
}

function edit(id, changes) {
    return Users('users')
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