const db =require('../dbConfig');
const { findByPostId } = require('./commentModel');

const Like = { findByPostId: (postId) => {
    return db('likes').where({postId});
},

create: (likeData) => {
    return db('likes').insert(likeData);
}

};

module.exports = Like;