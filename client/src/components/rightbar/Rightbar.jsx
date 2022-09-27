import React from 'react'
import gft from '../../assests/images/giftbox.png'
import roohafza from '../../assests/images/roohafza.jpg'
import './rightbar.css'

import {contacts} from '../../assests/data/contacts'

const Rightbar = () => {
  return (
    <div>
      <div className="container rightbar-container">
       <br /> 
      <h3>Birthdays</h3>
        <div className="birthday-container">
          
          <img src={gft} alt="gift" /> 
          <span><b> John</b>, <b> Peter</b> and <b> 2</b> more have birthdays today</span>
        </div>
        <div className="adcontainer">
          <img src={roohafza} alt="" />
        </div>
        <br />
        <h3>Contacts</h3>
        <div className="contacts-container">
        {
          contacts.map((contact)=>(
            <div className="singleContact">
            <img src={require('../../assests/images/'+contact.image+'.jpg')}/>
            <h6>{contact.name}</h6>
            {contact.online && <span className='online-contact'></span>}
            
            </div>
          ))
        }
        </div>
        
    
      </div>
    </div>
  )
}

export default Rightbar