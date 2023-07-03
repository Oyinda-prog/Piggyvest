import React from 'react'
import '../assets/styling/Product.css'
import img from '../assets/images/logo.svg'
import img1 from '../assets/images/facebook.png'
import img2 from '../assets/images/audit.png'

const Product = () => {
    return (
        <>
            <div className='container mt-5 mb-5'>
                <div className='row text-dark product'>
                    <div className="col-lg-3">
                        <img src={img} alt="" />
                        <div><img src={img2} alt="" className='img2 mt-4 card' /></div>
                    </div>
                    <div className="col-lg-2 text-dark">
                        <p>Products</p>
                        <a href="" id='bank'>Piggybank</a><br />
                        <a href="" id='bank'>Invest</a><br />
                        <a href="" id='bank'> Safelock</a><br />
                        <a href="" id='bank'>Target Savings</a><br />
                        <a href="" id='bank'>Flex Naira</a><br />
                    
                    </div>
                    <div className="col-lg-2 text-dark">
                        <p>Company</p>
                        <a href="" id='bank'>About</a><br />
                        <a href="" id='bank'>FAQs</a><br />
                        <a href="" id='bank'>Blog</a><br />
                    </div>
                    <div className="col-lg-2 text-dark">
                        <p >Legal</p>
                        <a href="" id='bank'>Terms</a><br />
                        <a href="" id='bank'>FAQs</a><br />
                        <a href="" id='bank'>Blog</a><br />
                    </div>
                    <div className="col-lg-3 text-dark'">
                        <img src={img1} alt="" />
                      <div> <a href="" id='bank'>Tesmot House, Abdulrahman Okene <br />
                        close, Victoria Island, Lagos, Nigeria
                        </a>
                       <div><a href="" className='ms-5' id='bank'>contact@piggyvest.com</a></div> 
                       <div><a href=""  className='ms-5' id='bank'><span className='ms-2' id='bank'>+234 700 933 933 933</span> </a></div>
                        </div> 
        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product