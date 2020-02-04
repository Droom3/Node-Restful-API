const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          id: 1, 
          username: 'jonathanchen',
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1,
          name: 'Jonathan Chen',
          experience: 'Buidling some terminal game from Java',
          industry: 'Technology',
          imgUrl: ''
        },
        { 
          id: 2, 
          username: 'jonahaitchison',
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1,
          name: 'Jonah Aitchison',
          experience: 'Sleep in the day away, coding and building things',
          industry: 'Technology',
          imgUrl: ''
        },
        { 
          id: 3, 
          username: 'devindias',
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1,
          name: 'Devin Dias',
          experience: 'Building lots of servers',
          industry: 'Technology',
          imgUrl: ''
        }
      ]);
    });
};