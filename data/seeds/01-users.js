const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          username: 'jonathanchen', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1
        },
        { id: 2, 
          username: 'jonahaitchison', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1
        },
        { id: 3, 
          username: 'devindias', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1
        },
        { id: 4, 
          username: 'lambdaschool', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 2
        },
        { id: 5, 
          username: 'appleinc', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 2
        },
        { id: 6, 
          username: 'google', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 2
        },
        { id: 7, 
          username: 'tylerthompson', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1
        },
        { id: 8, 
          username: 'arahmed', 
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 1
        },
      ]);
    });
};