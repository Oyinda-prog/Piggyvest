import React from 'react'
import img1 from '../assets/images/piggy.png'
import img2 from '../assets/images/safelock.png'
import img3 from '../assets/images/target.png'
import img4 from '../assets/images/flex.png'
import '../assets/styling/Sect.css'

const Sect = () => {
    return (
        <div className='container mt-5 secty'>
            <div className='row'>
                <div className='col-lg'>
                    <div className='mt-5 text-dark ways'><h1>4 ways to build</h1></div>
                    <div className='text-dark'><h1>your savings</h1></div>
                    <div className='mt-5 text-dark mb-3'>
                        <span>Earn 5%-15% when you save with any</span>
                        <p>of these PiggyVest plans.</p>
                        <button className='fw-bold text-white bg-dark p-2 border-0 rounded mt-3'>Start Saving</button>

                    </div>

                </div>
                   
                <div className='col-lg me-3 rounded' style={{backgroundColor:'#F9F9F9'}} >
                
                <a href=""  className='reach'>
                
                <div className='mt-2 mb-4'><img src={img1} alt="" className='pigg' /></div>
                <div className='mb-3 text-dark'><h6>Automated Savings</h6></div>
                <div className='pb-4 text-dark'>
                    <span>Build a dedicated savings faster on</span>
                    <p>your terms automatically or manually</p>
                </div>
                <div className='pb-3 text-dark'>
                <div className='text-dark flex'>  ➡️ <span >Piggybank</span></div> 
                </div>
                 </a>

                </div>
                <div className='col-lg rounded' style={{backgroundColor:'#F9F9F9'}}>
                <a href=""  className='reach'>

<div className='mt-2 mb-4'><img src={img2} alt="" className='pigg' /></div>
<div className='mb-3 text-dark'><h6>Fixed Savings</h6></div>
<div className='pb-4 text-dark' >
    <span >Lock money away for a fixed duration</span><br />
    <span>with no access to it until maturity. It’s</span><br />
    <span>your trms automatically or manually</span>
</div>
<div className='pb-3'>
                 <div className='text-dark flex'>  ➡️ <span>Safelock</span></div> 
                </div>
 </a>
                </div>
              
            </div>
            <div className='row mt-5'>
                <div className='col-lg-4'>
                    {/* <div><h1>4 ways to build</h1></div>
                    <div><h1>your savings</h1></div>
                    <div className='mt-5'>
                        <span>Earn 5%-15% when you save with any</span>
                        <p>of these PiggyVest plans.</p>
                    </div> */}

                </div>
                   
                <div className='col-lg me-3 rounded' style={{backgroundColor:'#F9F9F9'}}>
                
                <a href="" className='reach'>

                <div className='mt-2 mb-4'><img src={img3} alt="" className='pigg' /></div>
                <div className='mb-3 text-dark'><h6>Goal-orientded Savings</h6></div>
                <div className='pb-4 text-dark'>
                    <span >Reach all your savings goals faster.</span><br />
                    <span>Save towards multiple goals on your</span><br />
                    <span>own or with a group.</span>
                </div>
                <div className='pb-3'>
                <div className='text-dark flex '>  ➡️ <span>Target Savings</span></div> 
                </div>
                 </a>

                </div>
                <div className='col-lg rounded ' style={{backgroundColor:'#F9F9F9'}}>
                <a href=""  className='reach'>

<div className='mt-2 mb-4'><img src={img4} alt="" className='pigg' /></div>
<div className='mb-3 text-dark'><h6>Flexible Savings</h6></div>
<div className='pb-4 text-dark'>
    <span>Save, transfer, withdraw, manage and</span><br />
    <span>organise your money for free at any</span><br />
    <span>time.</span>
</div>
<div className='pb-3'>
                <div className='text-dark flex'>  ➡️ <span>Flex Naira</span></div> 
                </div>
 </a>
                </div>
              
            </div>
        </div>
    )
}

export default Sect