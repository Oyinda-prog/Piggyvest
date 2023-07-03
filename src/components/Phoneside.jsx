import React from 'react'
import '../assets/styling/Phoneside.css'
import img1 from '../assets/images/invest.png'
import img2 from '../assets/images/img22.png'

const Phoneside = () => {
  return (
    <>
    <div className='container phoneSide mt-lg-5'>
        <div className='row  mt-lg-5'>
            <div className='col-lg-6'>
                <span><img src={img2} alt=""  className='img1'/></span>
                <span><img src={img1} alt=""  className='phone'/></span>
            </div>
            <div className='col-lg-6 text-dark phone2'>
                <div className='text-dark upTo p-1'>Up to 25% Returns</div>
                <h1>Access investment</h1>
                <h1>opportunities</h1>
                <div className='pt-4 pb-5 text-dark'>
                <span >Invest securely and confidently on the go. Grow your</span><br />
                <span>money confidently by investing in pre-vetted investment</span><br />
                <span>opportunities.</span>
                </div>
                <a href="" id='a'>Learn more about investments</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Phoneside