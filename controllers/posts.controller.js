const Posts = require("../models/Posts.model");

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

module.exports={
    createPost,
    updatePost
}