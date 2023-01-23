import React from 'react'
import '../style/Subscribe.css'

export default function Subscribe() {
  return (<>
    <div className="subs-container">
        <div className='subs'>
            <h2>Subscribe to Newsletter</h2>
            <p>We have a wide experience in experience design and strategy</p>
            <div className="input">
                <div className="input-data">
                    <input type="email" name="email" id="" placeholder='Enter your email address'/>
                    <button>Send Now</button>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}
