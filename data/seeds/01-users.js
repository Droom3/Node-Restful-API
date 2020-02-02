const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          username: 'jonathanchen', 
          password: bcrypt.hashSync('password', 10),
          firstname: 'Jonathan',
          lastname: 'Chen',
          occupation: 'Java Developer',
          experience: 'Years of Java programming',
          interest: 'Coding, cooking, backpacking, marksmanship'
        },
        { id: 2, 
          username: 'jonahaitchison', 
          password: bcrypt.hashSync('password', 10),
          firstname: 'Jonah',
          lastname: 'Aitchison',
          occupation: 'Backend Developer',
          experience: '',
          interest: ''
        }
      ]);
    });
};