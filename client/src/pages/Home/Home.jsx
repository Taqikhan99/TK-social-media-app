import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsfeed from '../../components/newsfeed/Newsfeed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'

import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid home-container">
          <Sidebar/>
          <Newsfeed/>
          <Rightbar/>
      </div>
    </div>
    
  )
}

export default Home