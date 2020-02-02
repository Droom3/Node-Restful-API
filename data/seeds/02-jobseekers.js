const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('jobseekers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jobseekers').insert([
        { user_id: 1, 
          first_name: 'Jonathan',
          last_name: 'Chen',
          occupation: 'Student',
          experience: 'Years of Java programming',
          interest: 'Coding, cooking, backpacking'
        },
        { user_id: 2, 
          first_name: 'Jonah',
          last_name: 'Aitchison',
          occupation: 'Student',
          experience: 'Cold Fusion Developer',
          interest: ''
        },
        { user_id: 3, 
          first_name: 'Devin',
          last_name: 'Dias',
          occupation: 'Team Lead',
          experience: 'Team lead at Lambda School',
          interest: ''
        }
      ]);
    });
};