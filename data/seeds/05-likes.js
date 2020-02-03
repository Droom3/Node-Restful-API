exports.seed = function(knex) {
  return knex('likes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {id: 1, user: 1, user_likes: 5 },
        {id: 2, user: 1, user_likes: 6 },
        {id: 3, user: 2, user_likes: 4 },
        {id: 4, user: 2, user_likes: 5 },
        {id: 5, user: 3, user_likes: 4 },
        {id: 6, user: 4, user_likes: 2 },
        {id: 7, user: 4, user_likes: 3 },
        {id: 8, user: 5, user_likes: 1 },
        {id: 9, user: 5, user_likes: 2 },
        {id: 10, user: 6, user_likes: 1 },
      ]);
    });
};