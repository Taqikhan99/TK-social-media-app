const express = require('express')
const { updateUser, deleteUser, getUserById, followUser, unfollowUser } = require('../controllers/users.controllers')
// const { getAllUsers } = require('../controllers/users.controllers')
const userRouter= express.Router()

// userRouter.get('/',getAllUsers)
userRouter.put('/:id',updateUser)

// delete a user
userRouter.delete('/:id',deleteUser)

// get a user
userRouter.get('/:id',getUserById)

// follow a user
userRouter.put('/:id/follow',followUser)

// unfollow a user
userRouter.put('/:id/unfollow',unfollowUser)

module.exports=userRouter