const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/profile', authenticateToken, userController.getProfile);
// in here we make the get request with profile as url also the authenticateToken is for that only authorized users can do this (getting users credentials)
// userController.getProfile sends the details to the user as a response 

module.exports = router;