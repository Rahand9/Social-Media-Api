exports.up = function(knex){
return knex.schema.createTable('comments', function(table){
table.increments('id').primary();
table.integer('postId').unsigned().references('id').inTable('posts').onDelete('CASCADE');
table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
table.text('content').notNullable();
table.timestamps(true, true);

});

};

exports.down = function(knex){
    return knex.schema.dropTableIfExists('comments');
    //dropTableIfExists deltes the whole table 
    // while .del deltes just rowss from table 
    // example on how to use .del knex('comments').del()
    // knex('comments').where('postId', 1).del() this way if u want to specify what to delete
};