import React from 'react'
import CreatePost from '../createpost/CreatePost'
import SinglePost from '../singlepost/SinglePost'


import { posts } from '../../assests/data/posts'

import './newsfeed.css'

const Newsfeed = () => {
  return (
    <div className='newsfeed'>
        <CreatePost/>
        <br />
        
        {/* map through the posts */}
        {posts.map((p)=>(
          <SinglePost key={p.id} post={p}/>
        ))}

        {/* <SinglePost 
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
        /> */}
    </div>
  )
}

export default Newsfeed