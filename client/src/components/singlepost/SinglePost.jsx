import React from 'react'

import {BiDotsVertical} from 'react-icons/bi'
import {AiFillLike,AiFillHeart} from 'react-icons/ai'


import './singlepost.css'

const SinglePost = (props) => {

    const {postText,postImage,authorImage,noOfLikes} = props
  return (
    <div className='container post-container'>

        <div className="postTop">
            <div className="topleft">
                <img src={authorImage} alt="profilepic" />
                <span className='post-author'>Taqi Ahmed</span>
                <span className='post-time'> 3 mins ago</span>
            </div>
            <div className="topright">
                <h4><BiDotsVertical fontSize={30} cursor="pointer"/></h4>
            </div>
        </div>
        <div className="postData">
                <p className="postText">{postText}</p>
                <img src={postImage} alt="sarfu" />
        </div>
        <div className="postBottom">
            <div className="likesOptions">
            <p className="like"><AiFillLike/></p>
            <p className="heart"><AiFillHeart/></p>
            <p>{noOfLikes} people like it</p>
            </div>
            
        </div>

    </div>
  )
}

export default SinglePost