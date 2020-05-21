
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'andrew@drewtodraw.com', password: '$2b$10$S8Sf4AHIT1MuevE22ZQIDOg2e2BNc0906SYyRGySHlp0xFZms0XlG'}
      ]);
    });
};
