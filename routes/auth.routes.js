const express = require('express')
const { registerUser, loginUser } = require('../controllers/auth.controllers')
// const { getAllUsers } = require('../controllers/users.controllers')
const authRouter= express.Router()

// Register New User
authRouter.post('/register',registerUser)

// login user
authRouter.post('/login',loginUser)


module.exports=authRouter