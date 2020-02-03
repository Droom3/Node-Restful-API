exports.seed = function(knex) {
  return knex('jobs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        { id: 1, 
          title: 'Assistant Instructor', 
          description: 'Helps students with web dev materials',
          salary: '65000 usd/year',
          company_id: 4
        },
        { id: 2, 
          title: 'Software Engineer I', 
          description: 'You will be using Python to work on projects',
          salary: '135000 usd/year',
          company_id: 5
        },
        { id: 3, 
          title: 'Tech Lead', 
          description: 'A typical tech lead',
          salary: '247000 usd/year',
          company_id: 5
        },
        { id: 4, 
          title: 'UI Designer', 
          description: 'Designing awesome features',
          salary: '97500 usd/year',
          company_id: 5
        },
        { id: 5, 
          title: 'Data Scientist', 
          description: 'Design statistical models to bring data to life',
          salary: '217500 usd/year',
          company_id: 6
        },
        { id: 6, 
          title: 'Machine Learning Engineer', 
          description: 'Using big data to change lives',
          salary: '177500 usd/year',
          company_id: 6
        },
      ]);
    });
};