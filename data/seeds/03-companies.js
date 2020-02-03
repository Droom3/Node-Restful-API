const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        { 
          user_id: 4, 
          company_name: 'Lambda School',
          description: 'A new way of schooling'
        },
        { 
          user_id: 5, 
          company_name: 'Apple Inc.',
          description: 'Creating the best products for you'
        },
        {
          user_id: 6,
          company_name: 'Google',
          description: 'The future is forged here'
        }
      ]);
    });
};