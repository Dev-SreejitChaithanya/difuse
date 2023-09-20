import React from 'react'
import productI from '../assets/img/ProductTV.png'
import bg from '../assets/img/BackBG-10.jpg'
const Contact = () => {
  return (
    <div>
      
      <div className="row align-items-center" style={{paddingTop:'10rem',paddingBottom:'10rem',backgroundImage:`url(${bg})`}}>  
      {/* backgroundColor: 'rgb(215, 228, 237,0.7)' */}
         <div className="col-md-6">
          <div className="ud-about-image">
            <img src={productI} alt="about" style={{ width: '40vw' }} className='col-8'></img>
          </div>
         </div>
         <div className="col-md-6">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
              <h5 className='text-start p-5 mozart-outer' style={{ lineHeight: '1.6em' }}>
                The versatile <b>DMSBG-100</b> router combines
                network, data, voice, and security features in a
                single device, providing consistently high
                performance across all access technologies.<br />
                The DMSBG-100 offers a comprehensive
                solution that meets all the requirements of small
                and medium offices, providing everything they
                need in one single box. It simplifies deployment
                and management, eliminating the hassle of
                having to manage multiple devices.
                Designed specifically to meet the growing data
                and voice needs of SOHOs and SMBs, the
                DMSBG-100 delivers consistently high
                performance throughout the entire network.
              </h5>
            </div>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default Contact
