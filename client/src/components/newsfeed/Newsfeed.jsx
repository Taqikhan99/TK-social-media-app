import React from 'react'
import CreatePost from '../createpost/CreatePost'
import SinglePost from '../singlepost/SinglePost'
import dp1 from '../../assests/images/profilepic1.jpg'
import sarf from '../../assests/images/sarfaraz_n.jpg'

import './newsfeed.css'

const Newsfeed = () => {
  return (
    <div className='newsfeed'>
        <CreatePost/>
        <br />

        <SinglePost 
        postText="Hello,this is my first post!"
        postImage={sarf}
        authorImage={dp1}
        noOfLikes={4}
        />
        <SinglePost 
        postText="Hello,this is my first post!"
        postImage={sarf}
        authorImage={dp1}
        noOfLikes={4}
        />
        <SinglePost 
        postText="Hello,this is my first post!"
        postImage={sarf}
        authorImage={dp1}
        noOfLikes={4}
        />
    </div>
  )
}

export default Newsfeed