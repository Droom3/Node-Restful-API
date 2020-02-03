const Jobseekers = require('../../dbConfig');

function find() {
    return Jobseekers('jobseekers')
        .select('user_id', 'first_name', 'last_name', 'occupation', 'experience', 'interest')
        .orderBy('user_id', 'asc');
}

function findById(id) {
    const [ids] = id;
    return Jobseekers('jobseekers')
        .where({ ids })
        .first();
}

function add(user) {
    return Jobseekers('jobseekers')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids);
        });
}

function edit(id, changes) {
    return Jobseekers('jobseekers')
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