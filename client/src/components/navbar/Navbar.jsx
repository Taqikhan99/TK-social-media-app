import React from 'react'
import './navbar.css'
import {Form} from 'react-bootstrap'
import {MdNotifications,MdMessage} from 'react-icons/md'


const Navbar = () => {
  return (
    <div className='container-fluid navbar-container py-3'>
        
        <div className="logosec ">
            <h2>TkSocial</h2>
        </div>
        <div className="searchSec">
            <Form.Control
            type='search'
            placeholder='Search user or post'
            className=''
            />
        </div>
        <div className=" iconsSec ">
            <a className='topicons' href="">
                <MdNotifications fontSize={32}/>
                <span className='iconbadge'>1</span>
                
                </a>
            <a className='topicons' href="">
                <MdMessage fontSize={32}/>
                <span className='iconbadge'>2</span></a>
                
            <a href=""> <img src='/images/users/user1.jpg' alt="" /></a>

        </div>
       
    </div>
  )
}

export default Navbar