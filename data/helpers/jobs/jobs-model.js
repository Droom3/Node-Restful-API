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

// Jobs by company
function findByCompany(id) {
    return Jobs('jobs')
        .where({ company_id: id});
}

function getCompanyJob(companyId, jobId) {
    return Jobs('jobs')
        .where({company_id: companyId, id: jobId})
        .first();
}


module.exports = {
    find,
    findById,
    add,
    edit,
    remove,
    findByCompany,
    getCompanyJob
}