exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id');
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
            tbl.primary('user_id');
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
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');    
        })
        .createTable('companies', tbl => {
            tbl.primary('user_id');
            tbl.string('company_name', 128)
                .notNullable()
                .unique();
            tbl.string('description')
                .notNullable();
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
                .references('user_id')
                .inTable('companies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('likes', tbl => {
            tbl.increments();
            tbl.integer('user')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('user_likes')
                .unsigned()
                .notNullable();
        })
        .createTable('roles', tbl => {
            tbl.increments();
            tbl.string('name', 128)
              .unique()
              .notNullable();
          })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .raw('drop table if exists users cascade;')
        .raw('drop table if exists jobseekers cascade;')
        .raw('drop table if exists companies cascade;')
        .raw('drop table if exists jobs cascade;')
        .raw('drop table if exists likes cascade;')
        .raw('drop table if exists roles cascade;')
        // .dropTableIfExists('users')
        // .dropTableIfExists('jobseekers')
        // .dropTableIfExists('companies')
        // .dropTableIfExists('jobs')
        // .dropTableIfExists('likes')
        // .dropTableIfExists('roles')
}; 