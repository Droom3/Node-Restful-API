exports.seed = function(knex) {
  return knex('listings').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        { id: 1, 
          title: 'Assistant Instructor', 
          description: 'Helps students with web dev materials',
          salary: '65000 usd/year',
          company_id: 1
        },
        { id: 2, 
          title: 'Lecturer', 
          description: 'Remote opportunity to teach computer science in Python',
          salary: '75000 usd/year',
          company_id: 1
        },
        { id: 3, 
          title: 'Software Engineer I', 
          description: 'You will be using Python to work on projects',
          salary: '135000 usd/year',
          company_id: 2
        },
        { id: 4, 
          title: 'Tech Lead', 
          description: 'A typical tech lead',
          salary: '247000 usd/year',
          company_id: 2
        },
        { id: 5, 
          title: 'UI Designer', 
          description: 'Designing awesome features',
          salary: '97500 usd/year',
          company_id: 3
        },
      ]);
    });
};