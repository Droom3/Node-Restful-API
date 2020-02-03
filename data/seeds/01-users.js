const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          username: 'jonathanchen', 
          password: bcrypt.hashSync('password', 10),
          user_type: 1
        },
        { id: 2, 
          username: 'jonahaitchison', 
          password: bcrypt.hashSync('password', 10),
          user_type: 1
        },
        { id: 3, 
          username: 'devindias', 
          password: bcrypt.hashSync('password', 10),
          user_type: 1
        },
        { id: 4, 
          username: 'lambdaschool', 
          password: bcrypt.hashSync('password', 10),
          user_type: 2
        },
        { id: 5, 
          username: 'appleinc', 
          password: bcrypt.hashSync('password', 10),
          user_type: 2
        },
        { id: 6, 
          username: 'google', 
          password: bcrypt.hashSync('password', 10),
          user_type: 2
        }
      ]);
    });
};