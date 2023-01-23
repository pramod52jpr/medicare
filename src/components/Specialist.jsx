import React from 'react'
import '../style/Specialist.css'

export default function Specialist() {
  return (<>
    <div className="specialist-container">
      <h1>We Have The Best Specialist</h1>
      <p>We have a wide experience design and strategy, with locally-rooted knowledge.</p>
      <div className="specialist">
        <div className='name'><div></div><b style={{marginLeft:'10px',background:'white'}}>Dr. Awatiff AI</b><h6 style={{marginLeft:'10px',marginTop:'5px',fontWeight:'100',background:'white'}}>Dental Care</h6></div>
        <div className='name'><div></div><b style={{marginLeft:'10px',background:'white'}}>Dr. Filipa Gaspar</b><h6 style={{marginLeft:'10px',marginTop:'5px',fontWeight:'100',background:'white'}}>Cardiology</h6></div>
        <div className='name'><div></div><b style={{marginLeft:'10px',background:'white'}}>Dr. Sukhmeet Gorae</b><h6 style={{marginLeft:'10px',marginTop:'5px',fontWeight:'100',background:'white'}}>Neurological</h6></div>
        <div className='name'><div></div><b style={{marginLeft:'10px',background:'white'}}>Dr. Siri JaKobsson</b><h6 style={{marginLeft:'10px',marginTop:'5px',fontWeight:'100',background:'white'}}>Prediatrics</h6></div>
      </div>
    </div>
  </>
  )
}
