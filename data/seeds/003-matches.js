exports.seed = function(knex) {
  return knex('match').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('match').insert([
        {id: 1, user_id: 1, company_id: 2, initiated_by: 1 },
        {id: 2, user_id: 1, company_id: 3, initiated_by: 1 },
        {id: 3, user_id: 2, company_id: 3, initiated_by: 1 },
        {id: 4, user_id: 2, company_id: 1, initiated_by: 1 },
        {id: 5, user_id: 3, company_id: 2, initiated_by: 1 },
        {id: 6, user_id: 3, company_id: 3, initiated_by: 1 },
        {id: 7, user_id: 1, company_id: 1, initiated_by: 0 },
        {id: 8, user_id: 2, company_id: 1, initiated_by: 0 },
        {id: 9, user_id: 2, company_id: 2, initiated_by: 0 },
        {id: 10, user_id: 3, company_id: 3, initiated_by: 0 }
      ]);
    });
};