import React from 'react'

import './createpost.css'

import {MdPhotoLibrary,MdLocationPin,MdEmojiEmotions} from 'react-icons/md'

const CreatePost = () => {
  return (
    <div>
      <div className="container createPostContainer">
        {/* top sec of create post */}
        <div className="createPostTop">
            <img src="/images/users/user1.jpg" alt="profile pic" />
            <input type="text" name='postinput' className='postinput' placeholder='Whats on your mind?' />
        </div>
        <hr />
        {/* bottom sec of create post */}
        <div className="createPostBottom">
          <div className="postInputOptions">
              <div className="inputOption">
              <MdPhotoLibrary fontSize={30} color='orange' />Photo or Video
              </div>
              <div className="inputOption">
              <MdLocationPin fontSize={30} color='Green' />Location
              </div>
              <div className="inputOption">
              <MdEmojiEmotions fontSize={30} color='red' />Feeling
              </div>
          </div>
          <button className='btn btn-success'>Post</button>
        </div>

      </div>

    </div>
  )
}

export default CreatePost