const Users = require('../../dbConfig');

function find() {
    return Users('users')
        .select('id', 'username', 'user_type', 'name', 'experience', 'industry', 'imgUrl')
        .orderBy('id', 'asc');
}

function findById(id) {
    return Users('users')
        .select('id', 'username', 'user_type', 'name', 'experience', 'industry', 'imgUrl')
        .where({ id: id })
        .first();
}

function findByUsername(property) {
    return Users('users')
        .where({ username: property })
        .first();
}

function add(user) {
    return Users('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

const change = async (id, changes) => {
    console.log(changes);
    await findById(id).update(changes);
    return findById(id);
}

function remove(id) {
    return Users('users')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findByUsername,
    findById,
    add,
    change,
    remove
}