import React from 'react'
import '../assets/styling/Customer.css'
import img1 from '../assets/images/security.png'
import img2 from '../assets/images/iphone.png'
import img3 from '../assets/images/android.png'
import img4 from '../assets/images/juliana.jpeg'
const Customer = () => {
  return (
    <>
    <div className='container customer mt-5'>
        <div className="row">
            <div className="col-lg-6">
              <div className='col-lg-8'>
                <div className='d-flex'>
                  <div className='image'>
                     <img src={img4} alt="" className='img-fluid rounded-5'/>
                  </div>
             
              <div className='ms-4 text-dark'>
                <h6>Juliana M</h6>
                <p id='business'>Piggyvest has really helped me in the cause of my business, it has been amazing saving my money with them. I encourage you all to give them a trial by investing your money today, you will thank me later. I am a living testimony, no scam here!</p>
              </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-dark">
                <div className='pb-5 text-dark'>

                <h1 className='mb-4'>4 Million + customers</h1>
                <span>Since launching in 2016, over 4,000,000 people have</span><br />
                <span>used PiggyVest to manage their money better, avoid</span><br />
                <span>over-spending and be more accountable.</span>
               <div className='mt-4 mb-3'><button className='btn btn-dark text-white p-2 fw-bold'>Create free account</button></div> 
               <div className='d-flex mt-5'>
            <div>
        <a href=""><img src={img2} alt="" className='iphone ' /></a>
            </div>

            <div>
<a href=""><img src={img3} alt=""  className='android'/></a>
            </div>

          </div>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Customer