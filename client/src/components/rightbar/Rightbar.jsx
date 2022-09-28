import React from 'react'

import './rightbar.css'

import {users} from '../../assests/data/posts'
import Contact from '../contact/Contact'

const Rightbar = () => {

  let users2=users.filter(user=>user.id!=1)
  return (
    <div>
      <div className="container rightbar-container">
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
        
    
      </div>
    </div>
  )
}

export default Rightbar