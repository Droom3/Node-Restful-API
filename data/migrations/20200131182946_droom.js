exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128)
                .notNullable()
                .unique()
                .index();
            tbl.string('password', 128)
                .notNullable()
            tbl.integer('user_type')
                .notNullable();
        })
        .createTable('jobseekers', tbl => {
            tbl.increments();
            tbl.string('first_name', 128)
                .notNullable();
            tbl.string('last_name', 128)
                .notNullable();
            tbl.string('occupation', 255)
                .defaultTo('Unemployed');
            tbl.string('experience', 255)
                .defaultTo('None');
            tbl.string('interest', 255)
                .defaultTo('None');
            tbl.integer('user_type')
                .defaultTo(1);
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('companies', tbl => {
            tbl.increments();
            tbl.string('company_name', 128)
                .notNullable()
                .unique();
            tbl.string('description')
                .notNullable();
            tbl.integer('user_type')
                .defaultTo(2);
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('jobs', tbl => {
            tbl.increments();
            tbl.string('title')
                .notNullable();
            tbl.string('description')
                .notNullable();
            tbl.string('salary')
                .defaultTo('Not available');
            tbl.integer('company_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('companies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('jobseeker_likes', tbl => {
            tbl.primary(['jobseeker_id', 'company_id']);
            tbl.integer('jobseeker_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('jobseekers')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('company_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('companies');
        })
        .createTable('company_likes', tbl => {
            tbl.primary(['company_id', 'jobseeker_id']);
            tbl.integer('company_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('companies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('jobseeker_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('jobseekers');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('jobseekers')
        .dropTableIfExists('companies')
        .dropTableIfExists('jobs')
        .dropTableIfExists('jobseeker_likes')
        .dropTableIfExists('company_likes')
};