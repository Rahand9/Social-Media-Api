exports.up = function(knex){
return knex.schema.createTable('likes', function(table){
table.increments('id').primary();
table.integer('postId').unsigned().references('id').inTable('posts').onDelete('CASCADE');
table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
table.timestamps(true, true);

});

};

exports.down = function(knex){
return knex.schema.dropTableIfExists('likes');
};
