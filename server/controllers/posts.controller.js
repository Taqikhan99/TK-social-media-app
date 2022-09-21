const Posts = require("../models/Posts.model");
const Users = require("../models/Users.model")

// create a post
async function createPost(req,res){

    const newPost = new Posts(req.body)

    try {
        const savedPost= await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }

}

// update a post
async function updatePost(req,res){

    try {
        const post = await Posts.findById(req.params.id)

        if (post.userId === req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json("Post has been updated successfully!")
        }
        else{
            res.status(403).json("You can only update your post!")
        }
    } catch (error) {
        res.status(500).json(error)
    }

}
// delete a post
async function deletePost(req,res){

    try {
        const post = await Posts.findById(req.params.id)

        if (post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json("Post has been deleted successfully!")
        }
        else{
            res.status(403).json("You can only delete your post!")
        }
    } catch (error) {
        res.status(500).json(error)
    }

}


// like a post
async function likePost(req,res){
    try {
        const post = await Posts.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            // add user id to posts likes
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("Post liked!")
        }
        else{
             // remove user id from posts likes
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("Post unliked!")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
// get a single post
async function getsinglePost(req,res){
    try {
        // return post if find
        const post = await Posts.findById(req.params.id)
        
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get timeline posts
async function getTimelinePosts(req,res){
    
    try {
        const currentUser= await Users.findById(req.body.userId)
        const userPosts = await Posts.find({userId:currentUser._id})
       
        // getting posts of friends
        const friendPosts = await Promise.all(

            currentUser.following.map(friendId=>{
                Posts.find({userId:friendId})
            })

            
        )
        res.json(userPosts.concat(...friendPosts))
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    createPost,
    updatePost,
    deletePost,
    likePost,
    getsinglePost,
    getTimelinePosts

}