const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    const { content } = req.body;

    try{
        const [id] = await Post.create({ userId: req.user.id, content});
        res.status(201).json({ id, userId:req.user.id, content});
    } catch (error){
        res.status(500).send('Error creating post');
    }
};

exports.getPost = async (req, res) => {

    try{
        const posts = await Post.findByUserId(req.user.id);
        res.json(posts);
    }catch (error){
        res.status(500).send('Error fetching post');
    }

};

