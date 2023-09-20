import React from 'react'
import productII from '../assets/img/Product-4.png'

import image from '../assets/img/BackBG-6.jpg'
import technicalI from '../assets/img/layoutDifuse - Copy (2).svg'

import voip from '../assets/img/voip.png'
import ivr from '../assets/img/ivr.png'
import scalability from '../assets/img/sclability.png'
import integration from '../assets/img/integration.png'
import costeffective from '../assets/img/Cost-effective.png'
import { Slide, Fade, Flip } from 'react-reveal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProductTwo = (props) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} style={{padding:'1rem'}}>
      {props}
    </Tooltip>
  );
  return (
    <div> 
      {/* HERO SECTION */}
      <main role="main" style={{ paddingTop: '40vh',paddingBottom: '40vh',paddingLeft: '10vh',paddingRight: '10vh', backgroundImage: `url(${image})` }}>
      <Fade top><h1 className="display-1 cover-heading  sm-12" style={{ fontWeight: 'bold', fontFamily: 'Quicksand' }}>Difuse Business Gateway</h1></Fade>
      <Fade top><p className="lead " style={{ fontFamily: 'Quicksand' }}>Difuse isn’t just another business gateway device; it’s an evolutionary step in IT solutions tailored for the modern business era. Prioritizing security with Linux and honing communication with an Asterisk-based PBX system, Difuse is the epitome of business transformation. Embrace a brighter, more efficient future by integrating Difuse into your business operations today.</p></Fade>
      </main>
      {/*PRODUCT DESCRIPTION*/}
      <div className="row align-items-center pt-5 pb-5" style={{ backgroundColor: '#E3F2F0' }}> 
      <Fade top><h1 className="display-3 cover-heading  m-3" style={{fontWeight: 'bold', fontFamily: 'Quicksand' }}>Advantages</h1></Fade>
         <div className="col-md-6">
          
          <div className="ud-about-image">
          <Slide left><img src={productII} alt="about" style={{ width: '50vw' }} className='col-8'></img></Slide>
          </div>
         </div>
         <div className="col-md-6">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
           
              <h5 className='text-start p-5 mozart-outer' style={{ lineHeight: '1.6em' }}>
                


              <Fade up><b>Cost-Efficient Implementation:</b><br/>

Difuse ensures a combination of top-tier performance and tangible financial savings.
Without the weight of hefty licensing fees, businesses can optimize their infrastructure investments.</Fade>
<br/>
<Fade up><b>Tailored Customization & Flexibility:</b><br/>

In a world where every business has unique IT demands, Difuse champions adaptability.
Empowering enterprises to adjust the device according to specific needs, it ensures they stay agile amidst market shifts and requirements.</Fade>
<br/>
<Fade up><b>Unified Solutions under One Roof:</b><br/>

No more juggling multiple systems; Difuse brings together a wide range of essential functionalities.
This integrated approach simplifies operations, streamlines maintenance, and delivers a user-friendly experience.</Fade>
<br/>
<Fade up><b>Unyielding Security with Linux:</b><br/>

Harnessing the unparalleled security standards of the Linux operating system,
Difuse ensures businesses operate within a fortified data landscape.Coupled with flexibility for remote access, businesses are well-protected and adaptable.</Fade>
<br/>
<Fade up><b>Scalability for Growing Enterprises:</b><br/>

Growth is at the heart of business evolution. Difuse’s architecture is primed for expansion,
ensuring that as businesses enlarge their horizons, their IT framework seamlessly keeps pace.</Fade>
<br/>
<Fade up><b>State-of-the-Art Communication via Asterisk-Powered PBX:</b><br/>

The strength of communication in businesses cannot be overstated.
Difuse's PBX system, rooted in the Asterisk platform, guarantees impeccable internal and external communication channels.
Features like teleconferencing and voicemail further enhance this communicative prowess.</Fade>
<br/>
<Fade up><b>End Vendor Constraints:</b><br/>

The flexibility offered by Difuse liberates businesses from the confines of vendor lock-ins.
This freedom means businesses can smoothly transition</Fade>
              </h5>
             
            </div>
          </div>
         </div>
      </div>
      {/*FEATURES SECTION */}
      <div className="row align-items-center p-5" style={{ backgroundColor: '#E3ECF2'}}>
        <div className="row" style={{padding:'6rem 2rem'}}>
          <Fade top><h1 className="display-3 cover-heading  m-3" style={{fontWeight: 'bold', fontFamily: 'Quicksand' }}>Features</h1></Fade>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1  rounded mt-2  ">
                <div className="ud-single-feature"  >
                  <div style={{paddingBottom:'1.1rem'}}>
                  <Flip right><img src={voip} alt='voip'  height="80vh"/></Flip>
                  </div>
                  <div className="ud-feature-content">
                  <h3 className="ud-feature-title">VoIP Support</h3>
                  {/* //Top-Notch  */}
                  <p className="ud-feature-desc">
                  At the heart of the Difuse Business Gateway's communication prowess is Asterisk's robust VoIP capabilities.
                  It supports any SIP compliant IP Phones, softphones, gateways and trunks.
                  </p>
                  </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature" >
                <div >
                <Flip right><img src={ivr} alt='ivr'  height="100vh"></img></Flip>
                </div>
                <div className="ud-feature-content">
                <h3 className="ud-feature-title ">IVR System</h3>
                {/* Accelerated  */}
                <p className="ud-feature-desc">
                Difuse, powered by Asterisk, offers businesses a customizable IVR system.
                This allows for efficient call routing, ensuring that clients and partners reach the right department or individual without unnecessary delays,
                enhancing user experience and operational efficiency.
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div style={{paddingBottom:'0.2rem'}}>
                  {/* style={{marginTop:'2REM'}} */}
                  <Flip right><i className="fa-solid fa-phone fa-4x" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}></i></Flip>
                </div>
                <div className="ud-feature-content" >
                <h3 className="ud-feature-title">Advanced Call Features</h3>
                <p className="ud-feature-desc">
                 From call recording, call queuing, conference calling, and caller ID services, businesses have a plethora of tools at their disposal to manage and optimize voice communication. 
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature" >
                <div style={{paddingBottom:'1.2rem'}}>
                {/* style={{marginTop:'2REM'}}  */}
                <Flip right><img src={scalability} alt='scalability'  height="85vh"></img></Flip>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Scalability and Flexibility </h3>
                  <p className="ud-feature-desc">
                  The integration of Asterisk in the Difuse Business Gateway ensures that as a business grows,
                  its communication system can effortlessly scale alongside.
                  Whether it's adding new lines, integrating with CRM software, or expanding to new locations,
                  Asterisk provides the flexibility needed for modern enterprises.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div style={{paddingBottom:'1rem'}}>
                <Flip right><img src={integration} alt='integration'  height="90vh" ></img></Flip>
                </div>
                <div className="ud-feature-content">
                <h3 className="ud-feature-title">Integration with Digital Platforms</h3>
                <p className="ud-feature-desc">
                The Asterisk-powered Difuse Business Gateway allows businesses to seamlessly blend voice communication with digital platforms.
                This means capabilities like click-to-call from websites, voice alerts for system notifications,
                or even integrating voice features into custom apps are all within reach.
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div style={{paddingBottom:'0.6rem'}}>
                <Flip right><img src={costeffective} alt='Cost-effective'height="95vh"></img></Flip>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title"> Cost-Effective Communication</h3>
                  <p className="ud-feature-desc">
                  Transitioning from traditional telephony systems to Asterisk on the Difuse platform can result in significant cost savings.
                  With reduced call costs, especially for long-distance or international communication,
                  and the elimination of expensive proprietary hardware, the ROI becomes evident.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div style={{paddingBottom:'0.4rem'}}>
                <Flip right><i className="fa-solid fa-user-lock fa-4x align-items-center" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}></i></Flip>
                </div>
                <div className="ud-feature-content">
                <h3 className="ud-feature-title">Enhanced Security and Privacy</h3>
                <p className="ud-feature-desc">
                In tandem with Asterisk, prioritizes security. Encrypted voice communication, secure call setups,
                and advanced spam call prevention mechanisms ensure that voice communication is both secure and efficient.
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >


              </div>
            </div>
        </div>
      </div>
      {/*TECHNICAL SPECIFICATIONS(Add image with tooltip on it with all details in the datasheet*/}
      <div className="row align-items-center pt-5 pb-5" style={{ backgroundColor: '#E3F2F0' }}>  
         <div className="col-md-6">


 
         <Fade left><h1 className="display-5 cover-heading  m-3" style={{ padding:'3rem',fontWeight: 'bold', fontFamily: 'Quicksand' }}>Technical Specifications</h1></Fade>
          <div className="ud-about-image">
          
          
          <div className="ofeed-intersection-area">
  
  <div className="ofeed-shoppable-image">
    
      <span className="ofeed-aspect-ratio-box ofeed-aspect-ratio-box--portrait">
      <Slide left><img className="ofeed-image" alt='productLayout' src={technicalI}/></Slide>
      </span>
   
      <ul style={{listStyle:'none'}} >


      <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('USB Interface')}
      >
        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '30.7%'}} >
          <div className="ofeed-shoppable-image__dot"></div>
        </li>
        </OverlayTrigger>
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('DC power port')}
      >
        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '23.4%'}}>
          <div className="ofeed-shoppable-image__dot" ></div>         
        </li>
        </OverlayTrigger>
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('2 LAN Ports for connectivity')}
      >
        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '43.4%'}}>
          <div className="ofeed-shoppable-image__dot" ></div>         
        </li>
</OverlayTrigger>






      </ul>



  </div>

      </div>
          </div>
         </div>
         <div className="col-md-6">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
            <Slide right>
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
             </Slide> 
            </div>
          </div>
         </div>
      </div>





    </div >
  );
}
export default ProductTwo

/* <button type="button" className="btn " data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip Content">
<i className="fa-regular fa-circle-dot fa-lg" style={{color: '#071f59'}}></i>
 </button> */