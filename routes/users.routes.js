const express = require('express')
const { getAllUsers } = require('../controllers/users.controllers')
const userRouter= express.Router()

userRouter.get('/',getAllUsers)


module.exports=userRouter