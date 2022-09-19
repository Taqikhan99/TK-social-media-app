const mongoose = require('mongoose')

const Schema=mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    profilePic:{
        type:String,
        default:""
    },
    coverPic:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:20
    },
    country:{
        type:String,
        max:20
    }

},{timestamps:true})

// exporting my model
module.exports=mongoose.model('User',UserSchema)