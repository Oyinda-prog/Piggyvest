import React from 'react'
import img from '../assets/images/logo.svg'
import '../assets/styling/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav id='fix' className="navbar navbar-expand-lg mb-5 pt-2 shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={img} alt="" className='me-3 ms-lg-5 ms-sm-0' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link  me-5 mt-2 " href="#" id='savee'>Save</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 mt-2" href="#"  id='savee'>Invest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 mt-2" href="#"  id='savee'>Stories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 mt-2" href="#"  id='savee'>FAQs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 mt-2" href="#"  id='savee'>Resources</a>
        </li>
        <li className="nav-item">
          <button className='bg-white me-2 p-3 rounded' id='signin'>Sign in</button>
          {/* <a className="nav-link p-3" href="#" id='signin' >Sign in</a> */}
        </li>
        <li className="nav-item">
          <button className='bg-dark text-white p-3 rounded fw-bold' id='create'>Create free account</button>
          {/* <a className="nav-link" href="#"  id='create'>Create free account</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <nav class="navbar navbar-expand-lg bg-body-tertiary d-block d-lg-none" id='dblock'>
  <div class="container-fluid">
  <a className="navbar-brand" href="#"><img src={img} alt="" className='me-3 ms-lg-5 ms-sm-0' /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id='#savey'>Save</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id='#savey'>Invest</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id='#savey'>Stories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " id='#savey'>FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " id='#savey'>Resources</a>
        </li>
        <li className="nav-item">
          <button className='bg-white me-2 p-3 rounded' id='signin'>Sign in</button>
         
        </li>
        <li className="nav-item">
          <button className='bg-dark text-white p-3 rounded fw-bold' id='create'>Create free account</button>
          
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    </>
  )
}

export default Navbar