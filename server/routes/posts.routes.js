const express = require('express')
const { createPost, updatePost, deletePost, likePost, getsinglePost, getTimelinePosts } = require('../controllers/posts.controller')

const postRouter= express.Router()

// get timeline posts
postRouter.get('/timeline',getTimelinePosts)
// get a post
postRouter.get('/:id',getsinglePost)
// create a post
postRouter.post('/',createPost)
// update a post
postRouter.put('/:id',updatePost)
// delete a post
postRouter.delete('/:id',deletePost)
// like a post
postRouter.put('/:id/like',likePost)



module.exports=postRouter