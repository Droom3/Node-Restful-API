const Jobs = require('../../dbConfig');

function find() {
    return Jobs('jobs')
        .orderBy('id', 'asc');
}

function findById(id) {
    const [ids] = id;
    return Jobs('jobs')
        .where({ id: ids })
        .first();
}

function add(job) {
    return Jobs('jobs')
        .insert(job, 'id')
        .then(ids => {
            return findById(ids)
        })
}

function edit(id, changes) {
    return Jobs('jobs')
        .where({ id: id })
        .update(changes, 'id')
        .then(ids => {
            return findById(ids);
        });
}

function remove(id) {
    return Jobs('jobs')
        .where({ id: id })
        .del();
}

module.exports = {
    find,
    findById,
    add,
    edit,
    remove
}