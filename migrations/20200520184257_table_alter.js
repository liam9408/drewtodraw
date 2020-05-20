
exports.up = function(knex) {
    return knex.schema
    .dropTable('user')
    .createTable('users', table => {
        table.string('email').unique();
        table.string('password')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('users')
    .createTable('user', table => {
        table.string('email').unique();
        table.string('password')
    })
};
