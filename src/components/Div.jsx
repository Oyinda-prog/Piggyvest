import React from 'react'
import '../assets/styling/Div.css'
import img2 from '../assets/images/head.png'
import img3 from '../assets/images/card1.png'
import img4 from '../assets/images/card2.png'
import img5 from '../assets/images/iphone.png'
import img6 from '../assets/images/android.png'



const Div = () => {
  return (
    <>
    <div className='container bg-white mt-5 pt-5' id='contain'>
      <div className='row'>
        <div className='col-lg-6 mt-5'>
          <div id='way' className='mt-5 fw-bold'>The Better Way</div>
          <div id='save' className='fw-bold'>to Save & Invest.</div>
          <div id='help' className='mt-4'>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</div>
          <div>
          <button className='btn1 p-3 border-0 rounded text-white bg-dark mt-3 fw-bold account'>Create free account</button>
          </div>
          <div className='d-flex mt-5'>
            <div>
        <a href=""><img src={img5} alt="" className='iphone me-3' /></a>
            </div>

            <div>
<a href=""><img src={img6} alt=""  className='android'/></a>
            </div>

          </div>
        </div>
        <div className='col-lg-6'> 
        <div id='border1' style={{backgroundColor:'#F8F9FA'}}>
          <img id='head' src={img2} alt=""  className='img-fluid'/>
          <img src={img3} alt=""  id='card1'/>
          <img src={img4} alt=""  id='card2'/>
        </div>
        </div>
      </div>
    </div>
    </>
  ) 
}

export default Div