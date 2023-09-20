import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


import bg from '../assets/img/BackBG-10.jpg'
import datasheet from '../assets/files/DMSBG-100 Datasheet.pdf'
const Download = () => {
  return (
    <div>
   
   <div className="row align-items-center" style={{paddingTop:'20rem',paddingBottom:'20rem',backgroundImage:`url(${bg})`}}>  
      {/* backgroundColor: 'rgb(215, 228, 237,0.7)' */}
         <div className="col-md-4">
          <div className="ud-about-image">
            {/* <img src={productI} alt="about" style={{ width: '40vw' }} className='col-8'></img> */}
            <i className="fa-solid fa-download fa-10x col-8" style={{color: "#071f59",width: '40vw'}}></i>
          </div>
         </div>
         <div className="col-md-8">
         <Accordion  className='m-5 ' >
      <Accordion.Item eventKey="0"  className='m-2' >
        <Accordion.Header>Firmware</Accordion.Header>
        <Accordion.Body >
          <ul style={{listStyle:'none'}}>
            <li className='m-2'><a href='https://downloads.difuse.io' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}>Firmware 1.0<i className="fa-solid fa-arrow-up fa-sm m-2" style={{color:'#000',rotate:'45deg'}}></i></a></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='m-2'>
        <Accordion.Header>Brochure & Datasheet</Accordion.Header>
        <Accordion.Body>
        <ul style={{listStyle:'none'}}>
            <li className='m-2'><a href='https://difuse.io/Difuse-DMSBG-100-Brochure.pdf' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}>DMSBG-100-Brochure<i className="fa-solid fa-arrow-up fa-sm m-2" style={{color:'#000',rotate:'45deg'}}></i></a></li>
            <li className='m-2'><a href={datasheet} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}>DMSBG-100-Datasheet<i className="fa-solid fa-arrow-up fa-sm m-2" style={{color:'#000',rotate:'45deg'}}></i></a></li>
            
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
         </div>
      </div> 
 


    </div>
  )
}

export default Download
