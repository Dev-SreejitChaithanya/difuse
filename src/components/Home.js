import React from 'react'

import image from '../assets/img/BackBG-5.jpg'
import productI from '../assets/img/Product-3.png'
import productII from '../assets/img/Product-4.png'
import Fade from 'react-reveal/Fade';        
const Home = () => {
  return (
    <div>
       
    <main role="main"  style={{padding:'2vh',backgroundImage:`url(${image})`}}>

        <img src={productI} alt='productImage' style={{zIndex:'20',width:'60vw',}} />
        
        <h1 className="display-1 cover-heading mozart-inner" style={{fontWeight:'bold',fontFamily: 'Inter'}} >DMSBG 100</h1>
        <Fade bottom><h1 className="display-1 cover-heading" style={{fontWeight:'bold',fontFamily: 'Quicksand'}}>Networks, demystified.</h1></Fade>
        <p className="lead" style={{fontFamily: 'Quicksand'}}>Realize your potential with our secure gateway delivering reliable connectivity and advanced features.</p>
        <p className="lead" style={{fontFamily: 'Quicksand'}}>
          <a href="/Products/DMSBG100" className="btn btn-lg btn-secondary" style={{backgroundColor:'rgb(5, 29, 148,0.9)'}}>Learn more<i className="fa-solid fa-arrow-up fa-sm m-2" style={{color:'#ffffff',rotate:'45deg'}}></i></a>
        </p>
    </main>
    <div>
      <p className="lead" style={{fontFamily: 'Quicksand',backgroundColor:'rgb(216, 216, 216,0.2)',paddingLeft:'5em',paddingRight:'5em',paddingTop:'5em',paddingBottom:'5em',marginBottom:'0rem'}}>In today's hyper-connected digital landscape, businesses require dynamic, versatile, and secure networking solutions that not only meet the demands of the present but are also future-ready. Addressing this, we unveil the apex of networking innovation—the Difuse  Multiservice Business Gateway (DMSBG 100).

      The MBG isn’t just another router; it's a comprehensive fusion of the most sought-after networking tools and technologies, consolidated within a single, state-of-the-art device. </p>
    </div>




    <main role="main"  style={{paddingTop:'10rem',paddingBottom:'5rem',backgroundImage:`url(${image})`}}>

        <img src={productII} alt='productImage' style={{zIndex:'20',width:'70vw',}} />
        
        <h1 className="display-1 cover-heading mozart-inner" style={{fontWeight:'bold',fontFamily: 'Inter'}} >DPBX 50</h1>
        <Fade bottom><h1 className="display-1 cover-heading" style={{fontWeight:'bold',fontFamily: 'Quicksand'}}>Elevating Business Operations </h1></Fade>
        <p className="lead" style={{fontFamily: 'Quicksand',padding:'0rem 5rem'}}>In the realm of digital connectivity, the Difuse Business Gateway stands out not just for its robust VPN technologies and security features, but also for its integration of the Asterisk telephony system. This powerful combination provides businesses with an unparalleled communication infrastructure, merging traditional telephony with modern digital needs. Here's how Asterisk enriches the Difuse platform:
</p>
        <p className="lead" style={{fontFamily: 'Quicksand'}}>
          <a href="/Products/DPBX50" className="btn btn-lg btn-secondary" style={{backgroundColor:'rgb(5, 29, 148,0.9)'}}>Learn more<i className="fa-solid fa-arrow-up fa-sm m-2" style={{color:'#ffffff',rotate:'45deg'}}></i></a>
        </p>
    </main>

    <div>
      <p className="lead" style={{fontFamily: 'Quicksand',backgroundColor:'rgb(216, 216, 216,0.2)',paddingLeft:'5em',paddingRight:'5em',paddingTop:'5em',paddingBottom:'5em',marginBottom:'0rem'}}>The Difuse Business Gateway, by integrating the power of Asterisk telephony, offers businesses a comprehensive and modern communication solution. It's not just about making and receiving calls; it's about redefining how businesses interact, engage, and thrive in a digital-first world. Embrace the future of business communication with the Difuse and Asterisk synergy.</p>
    </div>

    


    

    </div>

  )
}

export default Home


