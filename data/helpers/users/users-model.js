const Users = require('../../dbConfig');

function find() {
    return Users('users')
        .select('id', 'username', 'user_type', 'name', 'experience', 'industry', 'imgUrl')
        .orderBy('user_id', 'asc');
}

function findById(id) {
    return Users('users')
        .select('id', 'username', 'user_type', 'name', 'experience', 'industry', 'imgUrl')
        .where({ id })
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

function remove(id) {
    return Users('users')
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