const db = require('../dbConfig');

const User = { findByUsername: (username) => {
        return db('users').where({ username }).first();
    },

    findById: (id) => {
        return db('users').where({ id }).first();
    },

    create: (userData) => {
        return db('users').insert(userData);
    }
};

module.exports = User;
