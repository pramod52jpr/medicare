import React from 'react'
import '../style/Navbar.css'

export default function Navbar() {
  return (<>
    <div className="navbar">
      <h2 style={{display:'inline'}}><b style={{color:'blue'}}>Medi</b><b style={{color:'orange'}}>Care+</b></h2>
      <div className="nav-item">
      <span><a href='#' style={{fontWeight:'bold'}}>Home</a></span>
      <span><a href='#'>About</a></span>
      <span><a href='#'>Service</a></span>
      <span><a href='#'>News</a></span>
      <span><a href='#'>Contact</a></span>
      </div>
    </div>
    </>
  )
}
