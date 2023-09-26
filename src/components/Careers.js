import React from 'react'
import career from '../assets/img/Careers.png'
import {  Fade } from 'react-reveal'
const Careers = () => {
  return (
    <div >

        <div className="row align-items-top" style={{padding:'10rem 2.5rem',backgroundColor: '#e5e5e5 ',textAlign:'center'}}>  
      {/* backgroundColor: '#d9d9d9' */}
      <Fade top><h1 className="display-3 cover-heading " style={{fontWeight: 'bold', fontFamily: 'Quicksand',textAlign:'center',padding:'2rem 2rem' }}>Join Us</h1></Fade><br></br>
         <div className="col-md-6">
          <div className="ud-about-image">
          <img src={career} alt="about" style={{width:'50vw',borderRadius:'20px' }} className='col-8'></img>
          </div>
         </div>
         <div className="col-md-6">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
            <Fade top><h1 className=" cover-heading " style={{ fontFamily: 'Quicksand',textAlign:'center',padding:'0rem 2rem' ,}}>Current Vacancies</h1></Fade><br></br>
                <h5><i>Currently we dont have any vaccant positions</i></h5>
            </div>
          </div>
         </div>
      </div>  


   
    </div>
  )
}

export default Careers
