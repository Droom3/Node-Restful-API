const Users = require('../../dbConfig');

function find() {
    return Users('users')
        .select('id', 'username', 'user_type')
        .orderBy('id', 'asc');
}

function findBy(property) {
    return Users('users')
        .where(property)
        .first();
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
    findBy,
    findById,
    add
}