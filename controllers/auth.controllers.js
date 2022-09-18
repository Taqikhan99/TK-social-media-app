

const User = require('../models/Users.model')
// function to register
async function registerUser(req,res){

    // destructuring body properties
    const {username,email,password}=req.body
    
    let user;

    try {
        user= new User({
            username,
            email,
            password
        })
        await user.save()
    } catch (error) {
        console.log("Error: ", error);
        
    }

    if (!user) {
        return res.status(500).json({
          mesage: "Unable to register User!",
        });
      } else {
        return res.status(201).json({ 'message':'User Registered successfully' });
      }
    

}

module.exports={
    registerUser
}