exports.seed = function(knex) {
  return knex('users_listings').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_listings').insert([
        {user_id: 1, listing_id: 2 },
        {user_id: 1, listing_id: 3 },
        {user_id: 2, listing_id: 3 },
        {user_id: 2, listing_id: 5 }
      ]);
    });
};