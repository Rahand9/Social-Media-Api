exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
/*If a user row in the users table is deleted any row in the current table (where this line of code is defined) that references that user's id will also be 
automatically deleted*/
        table.text('content').notNullable();
        //in here we are making a column named content alway remeber that what is in the bracket will be the name of the column that u want to create (in these cases)
        // can do .string instead but .text can hold more characters 
        //.string are usaully for names and titles
        table.timestamps(true, true);
        //this helps automatically track when each record was created and last updated.
        //The first true makes sure the created_at and updated_at columns are automatically filled with the current timestamp when a record is created.
        //The second true ensures that the updated_at column is automatically updated whenever the record is modified.
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
};
