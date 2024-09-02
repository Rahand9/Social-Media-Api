const express = require('express');
const router = express.Router();
 //t allows you to separate your route definitions and handlers into different files, making your code cleaner and easier to manage.
const authController = require('../controllers/authController');
// we use two . because we are in the routes folder so to acess controllers we need to move up a directory (folder)
//in order to move up folder we need to use two .

router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;