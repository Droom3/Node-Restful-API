const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        { id: 1, 
          username: 'lambdaschool', 
          password: bcrypt.hashSync('password', 10),
          name: 'Lambda School'
        },
        { id: 2, 
          username: 'appleinc', 
          password: bcrypt.hashSync('password', 10),
          name: 'Apple Inc.'
        },
        {
          id: 3,
          username: 'google',
          password: bcrypt.hashSync('password', 10),
          name: 'Google'
        }
      ]);
    });
};