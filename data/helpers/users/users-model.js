const Users = require('../../dbConfig');

function find() {
    return Users('users')
        .select('id', 'username', 'user_type')
        .orderBy('id', 'asc');
}

function findById(id) {
    const [ids] = id;
    return Users('users')
        .select('id', 'username', 'user_type')
        .where({ id: ids })
        .first();
}

function add(user) {
    return Users('users')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids);
        });
}

module.exports = {
    find,
    findById,
    add
}