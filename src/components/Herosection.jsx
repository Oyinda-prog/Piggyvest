import React from 'react'
import '../assets/styling/Herosection.css'
import img1 from '../assets/images/security.png'
const Herosection = () => {
  return (
    <>
    <div className='container mt-5' id='containy' >
      <div className='ms-lg-5 row mt-5' id='row1'>
        <div className='col-lg-2 ms-lg-5 mt-5'>
          <div className='ms-lg-5'>
          <div className='ms-lg-5'>
          <img id='img1' src={img1} alt="" />
          </div>
          </div>
        </div>
        <div className='col-lg-8 ms-5 mt-5'>
          <h2 className='secure'>Your security is our priority</h2>
          <div className='highest'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security</div>
          <div className='highest'>encryption to ensure that your information is comepletely protected from fraud.</div>
          <div className='mt-5'><a href="" id='learn'>Learn more</a></div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Herosection