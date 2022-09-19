const express = require('express')
const { createPost, updatePost } = require('../controllers/posts.controller')

const postRouter= express.Router()

// create a post
postRouter.post('/',createPost)
// update a post
postRouter.put('/:id',updatePost)
// delete a post

// like a post

// get timeline posts


module.exports=postRouter