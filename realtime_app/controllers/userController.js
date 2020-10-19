const userSchema = require('../models/users')

const storeUser = async (req, res) =>{
    var user = new userSchema(req.body);
    try{
        await user.save();
        res.status(200).send(user);
    }catch(e){
        console.log("Error!",e)
        res.send(e);
    }
};

exports.storeUser = storeUser;