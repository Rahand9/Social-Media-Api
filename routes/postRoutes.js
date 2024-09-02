const express = require('express');
const router = express.Router();
const userController = require('../controllers/postController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/', authenticateToken, postController.createPost);
router.get('/', authenticateToken, postController.getPosts);

module.exports = router;