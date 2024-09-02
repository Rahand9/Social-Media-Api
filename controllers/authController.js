const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
// if we were to  use /.knexfile we would have to do all the things like const knex= require('knex') and the other things
// By using dbConfig, you can simplify the import process. Instead of importing knexfile.js and then initializing Knex in multiple places, 
// you create and configure the Knex instance once in dbConfig.js and then import that instance wherever needed.

exports.signup = async (req, res) => {
// this exports.signup allows us to define the property and also be abled to use it elsewhere 
const{username, password} = req.body;
const hashedPassword = await bcrypt.hash(password, 10);

try{
const [id] = await User.create({username, password: hashedPassword});
res.status(201).send('User created');


} catch (error) {
    res.status(500).send('Error creating the user')
}
};

exports.login = async (req, res) => {
const {username, password}= req.body;

try{
    const user = await User.findByUsername(username);
    // in here we don't put curly braces with the username like this User.findByUsername({username});
    // because we are expecting 1 input 
    //if we are expecting multiple inputs that's when we add the curly braces
    if(!user) return res.status(400).send('Invalid input');

    const validPassword = await bcrypt.compare(password, user.password);
    // again in here 'password' is the input of the user 
    //and user.password is what is stored in our database
    if(!validPassword) return res.status(400).send('Invalid input');

    const token = jwt.sign({ id: user.id, username: user.username}, process.env.JWT_SECRET);
    res.header('Authorization', token).send({ token });

}catch (error){
    res.status(500).send('Error logging in');
}

};