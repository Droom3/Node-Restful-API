exports.seed = function(knex) {
  return knex('match').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('match').insert([
        {user_id: 1, company_id: 2, initiated_by: 1 },
        {user_id: 1, company_id: 3, initiated_by: 1 },
        {user_id: 2, company_id: 3, initiated_by: 1 },
        {user_id: 2, company_id: 1, initiated_by: 1 },
        {user_id: 3, company_id: 2, initiated_by: 1 },
        {user_id: 3, company_id: 3, initiated_by: 1 },
        {user_id: 1, company_id: 1, initiated_by: 0 },
        {user_id: 2, company_id: 1, initiated_by: 0 },
        {user_id: 2, company_id: 2, initiated_by: 0 },
        {user_id: 3, company_id: 3, initiated_by: 0 }
      ]);
    });
};