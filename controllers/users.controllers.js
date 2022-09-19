
const bcrypt= require('bcrypt')
const { findById } = require('../models/Users.model')
// async function getAllUsers(req,res){
//     console.log("The Route for All Users")
//     return res.status(200).json({'Message':'Getting All Users'});
// }

const Users= require("../models/Users.model")

// update user
async function updateUser(req,res){
    console.log(req.body)
    // check if user is same so that he may not update other's account
    if(req.body.userid==req.params.id){
        
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password=await bcrypt.hash(req.body.password ,salt)
                
            } catch (error) {
                return res.status(500).json("Error "+error)
            }
        }

        // update user whose id matches with params
        try {
            const user=await Users.findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(200).json("Account updated successfully!")
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(403).json("Cannot update user!")
    }

}
// delete user
async function deleteUser(req,res){
    
    
    if(req.body.userid==req.params.id || req.body.isAdmin){
        
        try {
           await Users.findByIdAndDelete(req.params.id)
           return res.status(200).json("User Deleted Successfully!") 
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(403).json("you can delete only your account!")
    }

}

// get a user
async function getUserById(req,res){
    console.log(req.params.id)
    try {
        const User= await Users.findById(req.params.id)
        console.log(User)
        const {password,updatedAt,createdAt,...other}=User._doc
        res.status(200).json({"User":other})
    } catch (error) {
        return res.status(500).json("Error: "+error)
    }
}

// follow a user
async function followUser(req,res){
    // check if both user are same or not
    if(req.body.userid !== req.params.id){
        try {
            const userToFollow=await Users.findById(req.params.id)
            const currentUser=await Users.findById(req.body.userid)

            // We will update followers and following lst of users if previously not included
            if (!userToFollow.followers.includes(req.body.userid)){
                await userToFollow.updateOne({$push:{followers:req.body.userid}})
                await currentUser.updateOne({$push:{following:req.params.id}})
                res.status(200).json("successfully follow")
            }
            else{
                res.status(403).json("You already following the user!")
            }

        } catch (error) {
            return res.status(500).json("Error: "+error)
        }
    }

    else{
        res.status(403).json({"ErrorMessage: ":"You Cannot follow yourself!"})
    }
}

// unfollow a user
async function unfollowUser(req,res){
    // check if both user are same or not
    if(req.body.userid !== req.params.id){
        try {
            const userToUnfollow=await Users.findById(req.params.id)
            const currentUser=await Users.findById(req.body.userid)

            // We will update followers and following lst of users if previously not included
            if (userToUnfollow.followers.includes(req.body.userid)){
                await userToUnfollow.updateOne({$pull:{followers:req.body.userid}})
                await currentUser.updateOne({$pull:{following:req.params.id}})
                res.status(200).json("successfully Unfollowed")
            }
            else{
                res.status(403).json("You already not following the user!")
            }

        } catch (error) {
            return res.status(500).json("Error: "+error)
        }
    }

    else{
        res.status(403).json({"ErrorMessage: ":"You Cannot follow yourself!"})
    }
}



module.exports={
    updateUser,
    deleteUser,
    getUserById,
    followUser,
    unfollowUser
}