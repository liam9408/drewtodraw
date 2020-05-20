
exports.up = function(knex) {
    return knex.schema.alterTable('users',(table)=>{
        table
        .increments('id')
        .unique()
        .primary();
    })
};

exports.down = function(knex) {
    table.dropColumn('id');
};
