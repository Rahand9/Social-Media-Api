const knex = require('knex');
const knexConfig = require('./knexfile');

// Selecting the environment from knexfile.js, defaulting to 'development'
const db = knex(knexConfig[process.env.NODE_ENV || 'development']);

module.exports = db;


