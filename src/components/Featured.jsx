import React from 'react'
import '../assets/styling/Featured.css'
import img1 from '../assets/images/brand3.png'
import img2 from '../assets/images/brand2.png'
import img3 from '../assets/images/brand1.png'

const Featured = () => {
  return (
    <>
    <div className='container-fluid featured' style={{backgroundColor:'#F5F5F5'}}>
        <div className='row pb-5 pt-5'>
            <div className="col-lg-4">
              <div className='ms-5 mt-3 text-dark '>
                <h2 className='fw-bolder'>As featured in</h2>
                </div>  
            </div>
            <div className="col-lg-2 me-2 mt-3">
                <img src={img1} alt="" className='image1' />
            </div>
            <div className="col-lg-2 me-2 mt-3">
            <img src={img2} alt="" className='image1' />
            </div>
            <div className="col-lg-2 mt-3 pb-5">
            <img src={img3} alt="" className='image1' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured