import React from 'react'
import '../assets/styling/Cookie.css'
const Cookie = () => {
  return (
    <>
    <div className='container cookie'>
        <div className='mx-auto col-lg-9 bg-dark pt-3 pb-5 rounded'>
         <div className='ms-2'>
            <div className='ms-3'>
           <h5 className='text-white'>Cookie Notification</h5>
           <div className='row mt-2'>
           <div className="col-lg-8">
            <span className='text-white uses'>This website uses cookies to optimize your experience and to provide us insight on how to</span><br />
            <span className='text-white uses'>interact with the site. All information shared with us through cookies are secure and covered</span><br />
            <span className='text-white uses'>by our data privacy obligations. You can access our Privacy Policy here</span>
           </div>
           <div className="col-lg-4  d-flex">
           <div><button className='me-3 border-0 bg-dark text-white'>Decline</button></div>
           <div><button className='p-3 bg-light text-dark rounded border-0 fw-bold accept '>Accept</button></div>
           </div>
           </div>
           </div>
         </div>
        </div>
    </div>
    </>
  )
}


export default Cookie