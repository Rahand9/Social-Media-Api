const db = require('../dbConfig');

const Comment = { findByPostId: (postId) => {
return db('comments').where({postId});

},

create: (commentData) =>{
return db('comments').insert(commentData);

}

};

module.exports = Comment;