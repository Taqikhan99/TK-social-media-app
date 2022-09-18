const express = require('express')
const { registerUser } = require('../controllers/auth.controllers')
// const { getAllUsers } = require('../controllers/users.controllers')
const authRouter= express.Router()

// Register New User
authRouter.post('/register',registerUser)


module.exports=authRouter