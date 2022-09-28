import React, { useState } from 'react'

import {BiDotsVertical} from 'react-icons/bi'
import {AiFillLike,AiFillHeart} from 'react-icons/ai'
import { users } from '../../assests/data/posts'

import './singlepost.css'

const SinglePost = ({post}) => {

    // use usestate to keep track of likes
    const [like,setLike]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)


    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
    }
    
    console.log(post)
  return (
    <div className='container post-container'>

        <div className="postTop">
            <div className="topleft">
                <img src={users.filter((u)=>u.id===post.userid)[0].profilepic} alt="profilepic" />
                <span className='post-author'>{users.filter((u)=>u.id===post.userid)[0].username}</span>
                <span className='post-time'>{post.date}</span>
            </div>
            <div className="topright">
                <h4><BiDotsVertical fontSize={30} cursor="pointer"/></h4>
            </div>
        </div>
        <div className="postData">
                <p className="postText">{post.desc}</p>
                <img src={ post.photo} alt="sarfu" />
        </div>
        <div className="postBottom">
            <div className="likesOptions">
            <p className="like"><AiFillLike onClick={likeHandler} /></p>
            <p className="heart"><AiFillHeart onClick={likeHandler} /></p>
            <p>{like} people like it</p>
            </div>
            
        </div>

    </div>
  )
}

export default SinglePost