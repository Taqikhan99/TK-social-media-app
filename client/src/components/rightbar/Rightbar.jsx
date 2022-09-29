import React from 'react'

import './rightbar.css'

import {users} from '../../assests/data/posts'
import Contact from '../contact/Contact'

import {AiFillHeart} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'


const Rightbar = ({profile}) => {

  const HomeRightbar=()=>{
    let users2=users.filter(user=>user.id!=1)
    return (
      <>
      
       <br /> 
      <h3>Birthdays</h3>
        <div className="birthday-container">
          
          <img src='/images/giftbox.png' alt="gift" /> 
          <span><b> John</b>, <b> Peter</b> and <b> 2</b> more have birthdays today</span>
        </div>
        <div className="adcontainer">
          <img src='/images/roohafza.jpg' alt="" />
        </div>
        <br />
        <h3>Contacts</h3>
        <div className="contacts-container">
        {
          
          users2.map((contact)=>(
            <Contact contact={contact}/>
          ))
        }
        </div>
      
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
    <h3>User Information</h3>
    <div className="userInfo">

      <h6><MdLocationOn color='green' fontSize={24}/> City: Karachi</h6>
      <h6><MdLocationOn color='green' fontSize={24}/> Country: Pakistan</h6>
      <h6><FaGraduationCap color='green' fontSize={24}/> Studied At PAF KIET</h6>
      <h6><AiFillHeart color='green' fontSize={24}/> Single</h6>

    </div>
    <hr />
    <h3>User Friends</h3>
    <div className="userFriends">

      <div className="userFriend">
        <img src="/images/users/user2.jpg" alt="" />
        <h6>Muhammad Ammad</h6>
      </div>
      <div className="userFriend">
        <img src="/images/users/user3.jpg" alt="" />
        <h6>Muhammad Ammad</h6>
      </div>
      <div className="userFriend">
        <img src="/images/users/user4.jpg" alt="" />
        <h6>Muhammad Ammad</h6>
      </div>
      <div className="userFriend">
        <img src="/images/users/user5.jpg" alt="" />
        <h6>Muhammad Ammad</h6>
      </div>
      <div className="userFriend">
        <img src="/images/users/user6.jpg" alt="" />
        <h6>Muhammad Ammad</h6>
      </div>

    </div>
    </>
    )
  }

  
  return (
    <div>
      <div className="container rightbar-container">

      <ProfileRightbar className='profile-rightbar' />  
      </div>
      </div>
  
  )
}

export default Rightbar