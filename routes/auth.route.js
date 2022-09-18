const express = require('express')
// const { getAllUsers } = require('../controllers/users.controllers')
const authRouter= express.Router()

authRouter.get('/',(req,res)=>{
    res.send('This is auth route!')
})


module.exports=authRouter