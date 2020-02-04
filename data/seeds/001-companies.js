const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('companies')
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        { 
          id: 1, 
          username: 'lambdaschool',
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 0,
          company_name: 'Lambda School',
          description: 'Testing a random description here',
          industry: 'Education',
          mission_statement: 'Revolutionazing education. Your new career starts here.',
          imgUrl: '',
          openPositions: 'Teachers, Developers'
        },
        { 
          id: 2, 
          username: 'apple',
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 0,
          company_name: 'Apple Inc',
          description: 'Creating the best products for you',
          industry: 'Technology',
          mission_statement: 'Make your wallet bleed.',
          imgUrl: '',
          openPositions: 'Developers, Desginers'
        },
        { 
          id: 3, 
          username: 'google',
          password: bcrypt.hashSync('testing123!', 10),
          user_type: 0,
          company_name: 'Google Inc',
          description: 'Testing a random description here, another one',
          industry: 'Technology',
          mission_statement: "Organize the world's information.",
          imgUrl: '',
          openPositions: 'Engineers'
        }
      ]);
    });
};