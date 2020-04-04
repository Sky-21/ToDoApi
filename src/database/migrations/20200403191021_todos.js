
exports.up = function(knex) {
  return knex.schema.createTable('todo', function(table){
    table.increments()
    table.string('title').notNullable()
    table.string('content').notNullable()
    table.integer('Cat_id').notNullable()

    table.foreign('Cat_id').references('id').inTable('categories')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todo')
};
