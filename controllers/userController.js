const User = require('../userModel');

exports.getProfile = async (req, res) => {
const {id} = req.user;
// req.user is more secure and holds trusted infos while req.body are just normal datas inputs sent by the user

try{

    const user = await User.findById(id);
    if(user) {
        res.json({ id: user.id, username: user.username });
    } else {
      res.status(404).send('User not found');
    }
} catch(error) {
   console.error(error);
    res.status(500).send('Error finding profile');
}

};