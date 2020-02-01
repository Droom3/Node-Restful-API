exports.seed = function(knex) {
  return knex('users_companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_companies').insert([
        {user_id: 1, company_id: 2 },
        {user_id: 2, listing_id: 3 }
      ]);
    });
};