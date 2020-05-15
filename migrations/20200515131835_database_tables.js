
exports.up = function(knex) {
    return knex.schema
    .createTable('user', table => {
        table.string('email').unique();
        table.string('password')
    })
    .createTable('images', table =>{
        table.integer('id');
        table.string('image_path');
        table.string('description');
        table.string('year')
    })
    .createTable('texts', table =>{
        table.integer('id');
        table.string('page_location');
        table.string('content',750)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('user')
    .dropTable('images')
    .dropTable('texts')
};
