exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.text('firstname', 128)
                .notNullable();
            tbl.text('lastname', 128)
                .notNullable();            
            tbl.text('occupation', 255)
                .notNullable();
            tbl.text('experience', 255);
            tbl.text('interest', 255);
        })
        .createTable('companies', tbl => {
            tbl.increments();
            tbl.text('name', 255)
                .unique()
                .notNullable();
        })
        .createTable('listings', tbl => {
            tbl.increments();
            tbl.text('title', 128)
                .notNullable();
            tbl.text('description', 1024)
                .notNullable();
            tbl.string('salary');
            tbl.integer('company_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('companies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('users_listings', tbl => {
            tbl.primary(['user_id', 'listing_id']);
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('listing_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('listings');
        })
        .createTable('users_companies', tbl => {
            tbl.primary(['user_id', 'company_id']);
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
        .dropTableIfExists('users')
        .dropTableIfExists('companies')
        .dropTableIfExists('listings')
        .dropTableIfExists('users_listings')
        .dropTableIfExists('users_companies')
};