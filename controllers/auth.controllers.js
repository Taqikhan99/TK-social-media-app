

const User = require('../models/Users.model')

const bcrypt= require('bcrypt')

// function to register
async function registerUser(req,res){

    // destructuring body properties
    const {username,email,password}=req.body
    
    let user;

    try {
        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        user= new User({
            username,
            email,
            password:hashedPassword
        })
        await user.save()
        res.status(201).json({ 'message':'User Registered successfully' });
    } catch (error) {
        res.status(500).json({'Message':error})
        
    }
}


// lpogin user
async function loginUser(req,res){
    const {email,password}=req.body
    try {
        // find user with given email 
        const user = await User.findOne({email:email})
        if(!user)
            res.status(404).json("User not found!")

        // check if password is valid
        const validPass=await bcrypt.compare(password,user.password)
        if(!validPass)
           return res.status(400).json("Wrong Password!")

        // if all correct then display user
        res.status(200).json(user)

        
    } catch (error) {
        res.status(500).json({'Message':error})
    }

}

module.exports={
    registerUser,
    loginUser
}