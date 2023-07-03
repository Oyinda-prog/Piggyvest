import React from 'react'
import img1 from '../assets/images/man.jpg'
import '../assets/styling/Section1.css'

const Section1 = () => {
  return (
    <>
    <div className='mt-5 container-fluid section1'>
            <div className='col-lg-12 bg-primary'>
            <div className='row'>
                <div className='col-lg-7' >
                    <div className='ms-5 pb-4 text-white'>

               <h1 className='mt-5 text-white'>Meet the saver of</h1>
               <h2>the month!</h2>
               <span>Every month, we shine a spotlight on one saver, asking</span><br/>
                <span>them questions about their savings culture and how the</span><br/>
               <span>product is specifically helping them shape how they spend</span><br/>
               <span>and save for future responsibilities.</span><br/>
               <div className='mt-5'>
               <a href="" ><span>➡️</span><span className='text-white fw-bold'>Meet The  Solie's</span> </a>
               </div>
             
                    </div>
                </div>
                <div className='col-lg-5'>
                <img src={img1} alt="" className='img-fluid' />
            </div>
               </div>
      
            </div>
          
        </div>
   
    </>
  )
}

export default Section1