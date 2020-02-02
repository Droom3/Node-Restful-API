exports.seed = function(knex) {
  return knex('company_likes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('company_likes').insert([
        {company_id: 4, jobseeker_id: 3 },
        {company_id: 5, jobseeker_id: 2 },
        {company_id: 6, jobseeker_id: 1 }
      ]);
    });
};