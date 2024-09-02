const db = require('../dbConfig');

const Post = { findByUserId: (userId) =>{
return db('posts').where({userId});

},

create: (postData) =>{

    return db('posts').insert(postData);
}

};

module.exports = Post;


