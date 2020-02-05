exports.up = function(knex) {
    return knex.schema.table('match', tbl => {
        tbl.unique(['user_id', 'company_id', 'initiated_by']);
    })
};

exports.down = function(knex) {
    return knex.schema.table('match', tbl => {
        tbl.dropUnique(['user_id', 'company_id', 'initiated_by']);
    })
};