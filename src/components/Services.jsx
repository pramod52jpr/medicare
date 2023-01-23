import React from 'react'
import '../style/Services.css'

function Services() {
  return (<>
    <div className="our-services">
        <h1>Our Services</h1>
        <p>We provide the most full medical service, so every person could heave the oppurtunity to receive qualitative medical help.</p>
        <div className="service">
          <div><img src="logo192.png" alt="img" className='logo' height={'70px'} style={{marginBottom:'20px',background:'white'}}/><br/>Dentel Care<pre style={{margin:'32px 0px',fontSize:'15px',fontWeight:'100',background:'rgb(68, 68, 249)',color:'white'}}>LEARN MORE    {'>'}</pre></div>
          <div><img src="logo192.png" alt="img" className='logo' height={'70px'} style={{marginBottom:'20px',background:'white'}}/><br/>Pulmonary<pre style={{margin:'32px 0px',fontSize:'15px',fontWeight:'100',background:'rgb(68, 68, 249)',color:'white'}}>LEARN MORE    {'>'}</pre></div>
          <div><img src="logo192.png" alt="img" className='logo' height={'70px'} style={{marginBottom:'20px',background:'white'}}/><br/>Neurological<pre style={{margin:'32px 0px',fontSize:'15px',fontWeight:'100',background:'rgb(68, 68, 249)',color:'white'}}>LEARN MORE    {'>'}</pre></div>
          <div><img src="logo192.png" alt="img" className='logo' height={'70px'} style={{marginBottom:'20px',background:'white'}}/><br/>Prediatrics<pre style={{margin:'32px 0px',fontSize:'15px',fontWeight:'100',background:'rgb(68, 68, 249)',color:'white'}}>LEARN MORE    {'>'}</pre></div>
        </div>
    </div>
  </>
  )
}

export default Services