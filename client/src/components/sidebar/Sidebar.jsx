import React from 'react'
import {MdRssFeed,MdGroups,MdBookmarks} from 'react-icons/md'
import {BsFillChatSquareTextFill,BsFillQuestionSquareFill} from 'react-icons/bs'
import {SiCoursera} from 'react-icons/si'

import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-container border'>
        <div className="sidebar-links">
              <div className="sidebar-link">
                  <MdRssFeed fontSize={30}/> <h5>Feed</h5>

                </div>  
              <div className="sidebar-link">
                  <BsFillChatSquareTextFill fontSize={30}/> <h5>Chats</h5>

                </div>  
              <div className="sidebar-link">
                  <MdGroups fontSize={30}/> <h5>Groups</h5>

                </div>  
              <div className="sidebar-link">
                  <MdBookmarks fontSize={30}/> <h5>Bookmarks</h5>

                </div>  
              <div className="sidebar-link">
                  <BsFillQuestionSquareFill fontSize={30}/> <h5>Questions</h5>

                </div>  
              <div className="sidebar-link">
                  <SiCoursera fontSize={30}/> <h5>Courses</h5>

                </div>  

               <button className="btn btn-warning">Show more</button> 
        </div>
        {/* <hr />   */}
        {/* <ul className="friendslist">
            <li className="friend">
                <img src={friendImg} alt="friend photo" />
                <h5>Peter Smith</h5>
            </li>
            <li className="friend">
                <img src={friendImg} alt="friend photo" />
                <h5>Peter Smith</h5>
            </li>
            <li className="friend">
                <img src={friendImg} alt="friend photo" />
                <h5>Peter Smith</h5>
            </li>
            <li className="friend">
                <img src={friendImg} alt="friend photo" />
                <h5>Peter Smith</h5>
            </li>
            <li className="friend">
                <img src={friendImg} alt="friend photo" />
                <h5>Peter Smith</h5>
            </li>
            <li className="friend">
                <img src={friendImg} alt="friend photo" />
                <h5>Peter Smith</h5>
            </li>
        </ul> */}
        
    </div>
  )
}

export default Sidebar