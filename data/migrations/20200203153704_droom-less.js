
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('companies', tbl => {
            tbl.increments();
            tbl.string('username', 128).unique().notNullable();
            tbl.string('password', 128).notNullable();
            tbl.boolean('user_type').defaultTo(0);
            tbl.string('company_name', 128).notNullable().unique();
            tbl.string('description').notNullable();
            tbl.string('industry');
            tbl.string('mission_statement');
            tbl.string('imgUrl');
            tbl.string('openPositions');
        })
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128).unique().notNullable();
            tbl.string('password', 128).notNullable();
            tbl.boolean('user_type').defaultTo(1);
            tbl.string('name', 128).notNullable();
            tbl.string('experience', 255);
            tbl.string('industry', 255);
            tbl.string('imgUrl');
        })
        .createTable('match', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('company_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('companies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('match')
    .dropTableIfExists('users')
    .dropTableIfExists('companies');
};
