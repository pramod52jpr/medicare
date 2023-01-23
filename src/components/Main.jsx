import React from 'react'
import '../style/Main.css'

function Main() {
  return (<>
    <div className="main-container">
        <div className='first'>
            <p>Welcome to Medicare+ Clinic</p>
            <h1>Best Specialists</h1>
            <p className='desc'>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
            <div className="button">
                <input type="button" value="Make an Appointment" />
                <input type="button" value="Departments" />
            </div>
        </div>
        <div className='second'></div>
    </div>
  </>
  )
}

export default Main