const mongoose = require('mongoose')

const Schema=mongoose.Schema

const PostSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        max:400
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]

    }

},{timestamps:true})

// exporting my model
module.exports=mongoose.model('Post',PostSchema)