import React from 'react'
import productI from '../assets/img/icon.png'

import {  Fade,Rotate  } from 'react-reveal'
const About = () => {
  return (
    <div >
      {/* DIFUSE OPEN SOURCE  */}
      <div className="row align-items-center" style={{padding:'6rem 2.5rem',backgroundColor: '#e5e5e5 ',textAlign:'center'}}>  
      {/* backgroundColor: '#d9d9d9' */}
      <Fade top><h1 className="display-3 cover-heading " style={{fontWeight: 'bold', fontFamily: 'Quicksand',textAlign:'center',padding:'1rem 2rem' }}>Difuse	: The Future of Open-Source Communication</h1></Fade>
         <div className="col-md-6">
          <div className="ud-about-image">
            <Rotate><img src={productI} alt="about" style={{ width: '30vw' }} className='col-8'></img></Rotate>
          </div>
         </div>
         <div className="col-md-6">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
              <h5 className='text-start p-5 mozart-outer' style={{ lineHeight: '1.6em' }}>
Step into the world of Difuse, a pioneering initiative by Iridia Solutions Private Limited, where cutting-edge open-source technology intersects with decades of unparalleled expertise in communication. Established in 2023 by luminaries with over two decades of profound experience in IT infrastructure, Iridia Solutions, through its brand Difuse, is setting new standards in the realms of multi-service business gateways and revolutionary communication devices.
              </h5>
            </div>
          </div>
         </div>
      </div>  
      {/* WHY CHOOSE DIFUSE ? */}
      <div className="row align-items-center" style={{padding:'6rem 5.5rem',paddingBottom:'6rem',backgroundColor: '#cccccc '}}>  
      {/* backgroundColor: '#d9d9d9' */}
      <Fade top><h1 className="display-3 cover-heading  m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',textAlign:'center',padding:'1rem 2rem' }}>Why Choose Difuse by Iridia Solutions?</h1></Fade>

         <div className="col-md-12">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
              <h5 className='text-start ps-5 pe-5 mozart-outer ms-2 me-2' style={{ lineHeight: '1.6em',textAlign:'center' }}>
    <ul>

      <li>At the heart of Difuse lies a deep-rooted commitment to the open-source community. We're driven by collaboration, innovation, and the collective pursuit of excellence.</li>
      <li>Flexible and Tailored Solutions is Recognizing the diverse communication needs. Difuse offers customizable solutions, leveraging the adaptability of open-source to meet your specific requirements.</li>
      <li>Legacy and Expertise is an extension of Iridia Solutions Private Limited. Difuse benefits from more than 20 years of IT infrastructure knowledge, ensuring a perfect blend of tradition and innovation.</li>
      <li>Community-Centric is Immerse yourself in a vibrant community of developers, tech enthusiasts. And businesses globally, who resonate with and contribute to the Difuse vision.</li>
      <li>Dedicated Support is beyond the realms of codes and modules, our team stands by you. And providing comprehensive support to ensure seamless integration and use of our products.</li>
      <li>Vision of Sustainability for us, open-source symbolizes a commitment not only to technological advancements. But also to a sustainable communication future, crafted through shared expertise and growth.</li>

    </ul>

    {/* At the heart of Difuse lies a deep-rooted commitment to the open-source community. We're driven by collaboration, innovation, and the collective pursuit of excellence.<br/> */}
    <br></br>
    {/* Flexible and Tailored Solutions: Recognizing the diverse communication needs, Difuse offers customizable solutions, leveraging the adaptability of open-source to meet your specific requirements.<br/> */}

    {/* Legacy and Expertise: As an extension of Iridia Solutions Private Limited, Difuse benefits from more than 20 years of IT infrastructure knowledge, ensuring a perfect blend of tradition and innovation.<br/> */}

    {/* Community-Centric: Immerse yourself in a vibrant community of developers, tech enthusiasts, and businesses globally, who resonate with and contribute to the Difuse vision.<br/> */}

    {/* Dedicated Support: Beyond the realms of codes and modules, our team stands by you, providing comprehensive support to ensure seamless integration and use of our products.<br/> */}

    {/* Vision of Sustainability: For us, open-source symbolizes a commitment not only to technological advancements but also to a sustainable communication future, crafted through shared expertise and growth.<br/> */}

              </h5>
            </div>
          </div>
         </div>

      </div>  
      {/* OUR MISSION */}
      <div className="row align-items-center" style={{padding:'6rem 2.5rem',paddingBottom:'6rem',backgroundColor: '#e5e5e5 '}}>  
      {/* backgroundColor: '#d9d9d9' */}
      <Fade top><h1 className="display-3 cover-heading  m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',textAlign:'center',padding:'1rem 2rem' }}>Our Mission</h1></Fade>

         <div className="col-md-12">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
              <h5 className='text-start p-5 mozart-outer' style={{ lineHeight: '1.6em' }}>
              Difuse, under the esteemed umbrella of Iridia Solutions Private Limited, is on a quest to redefine communication for tomorrow. We envision a world where communication boundaries are dissolved, collaborations are celebrated, and businesses are powered by the finest open-source tools.

Join the Difuse Evolution

Embark on a transformative journey into open-source with Difuse. Whether you're a code enthusiast, a business seeking innovative communication methodologies, or a tech aficionado, the Difuse community, backed by Iridia Solutions, welcomes you.

For collaboration, contributions, or inquiries, do contact us.
              </h5>
            </div>
          </div>
         </div>

      </div>  
    </div>
  )
}

export default About


