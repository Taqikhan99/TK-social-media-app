import React from 'react'

const Contact = ({contact}) => {
  return (
    <div>
        <div className="singleContact">
            <img src={contact.profilepic}/>
            <h6>{contact.username}</h6>
            {/* {contact.online && <span className='online-contact'></span>} */}
            
            </div>
    </div>
  )
}

export default Contact