import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsfeed from '../../components/newsfeed/Newsfeed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'

import './profile.css'

const Profile = () => {
  return (
      <>
    <Navbar/>
    <div className="container-fluid profile-container">
          <Sidebar/>
          <div className="profileRight">
              <div className="profileRightTop">
                <div className="coverSec">
                    <img src="/images/covers/cover1.jpg" alt="" />
                </div>
                <div className="profilepic">
                    <img src="/images/users/user1.jpg" alt="" />
                </div>
              </div>
              <div className="profileRightBottom">
                <Newsfeed className='newsfeed'/>
                <Rightbar className='rightbar' profile/>
              </div>
          
          </div>
          
      </div>
      </>
  )
}

export default Profile