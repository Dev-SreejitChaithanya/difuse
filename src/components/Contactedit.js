import React from 'react'
import { useState } from 'react';
import bg from '../assets/img/BackBG-10.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const Contactedit = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [msg,setMsg]=useState('')


  function Submit(e){
    const formEle = document.querySelector("form");
    e.preventDefault();
    
    const formDatab = new FormData(formEle);
    setName('');
    setEmail('');
    setPhone('');
    setMsg('');
    toast(`Thanks for Reaching Us,Will Contact You Soon `, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  fetch(
    `${process.env.REACT_APP_GSHEET_URL}`,
    {
      
      method: "POST",
      body: formDatab,

    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      
      <div className="row align-items-center" style={{paddingTop:'5rem',backgroundImage:`url(${bg})`}}>  
      {/* backgroundColor: 'rgb(215, 228, 237,0.7)' */}
      <h3 className=" m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand'}}>Wanna Talk ?</h3>
      <h1 className="display-4 m-1 mb-5" style={{fontWeight: 'bold', fontFamily: 'Quicksand',textAlign:'center',padding:'1rem 1rem' }}>Let's Get In Touch</h1><br></br>

         <div className="col-md-12" style={{paddingLeft:'6%',paddingRight:'6%'}}>
          <div className='row align-items-top'>

         <div className="col-xs-6 col-md-6  col-sm-12">
         
         <h2 className="m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.8rem'}}>INDIA</h2>
         <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',padding:'0.2rem '}}><i className="fa-solid fa-location-dot fa-1x"></i>  535/E, Technicity, Kannur-670643, Kerala.</h5>
         <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',padding:'0.2rem '}}><i className="fa-solid fa-location-dot fa-1x"></i> P.NO-23, 2nd Cross Street, Sembakkam, Chennai-600073, Tamil Nadu.</h5>
        
        <div className='row'>
            <div className='col'>
            <h5 className="  m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.5rem 0rem'}}><i className="fa-solid fa-phone fa-1x"> </i>+91-490-2500991</h5>
            </div>
            <div className='col'>
            <h5 className="  m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.5rem 0rem'}}><i className="fa-solid fa-envelope fa-1x"> </i>  hello@difuse.io</h5>
            </div>

        </div>

         
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.402195730121!2d75.60691507673071!3d11.807079639335043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42f0575205bf1%3A0xf8344e7dcf87dfda!2sDifuse%20(Iridia%20Solutions)!5e0!3m2!1sen!2sin!4v1695382980989!5m2!1sen!2sin" width="100%" height="200" style={{borderRadius:"20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map2'></iframe>
         
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7051526378605!2d80.1545492750757!3d12.926662387384587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525eeefea94f65%3A0xbf0d8886c378a0f0!2sp%2C%2023%2C%20Gayatri%20Nagar%20Main%20Rd%2C%20Iyappa%20Nagar%2C%20Sadasivam%20Nagar%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600073!5e0!3m2!1sen!2sin!4v1695388188275!5m2!1sen!2sin" width="100%" height="200" style={{borderRadius:"20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map3'></iframe>

           
         </div>
         <div className="col-xs-6 col-md-6  col-sm-12">
          <h2 className="m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.8rem'}}>UAE</h2>
         <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',paddingBottom:'6%'}}><i className="fa-solid fa-location-dot fa-1x"></i>  Shop #13 Al Rafa Street, Bur Dubai, Dubai.</h5>

         <div className='row'>
            <div className='col'>
            <h5 className="  m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.5rem 0rem'}}><i className="fa-solid fa-phone fa-1x"> </i>  +971-4-2142050</h5>
            </div>
            <div className='col'>
            <h5 className="  m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.5rem 0rem'}}><i className="fa-solid fa-envelope fa-1x"> </i>  hello@difuse.io</h5>
            </div>

        </div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.259400344318!2d55.28803987604876!3d25.26185792907752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42afffffffff%3A0xd6affe260950188a!2sCerebral%20Computers%20LLC%20(Laptop%2FMac%20Repair%20Center)!5e0!3m2!1sen!2sin!4v1695392806908!5m2!1sen!2sin" width="100%" height="200" style={{borderRadius:"20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map1'></iframe>       

         </div>
       
         </div>
         </div>
         <div className="col-md-12">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
            
            <form className="contactform" onSubmit={(e)=>Submit(e)}>
  <h2 style={{ fontFamily: 'Quicksand' }}>Send Us a Message</h2>
  <p type="Name*"><input placeholder="Sam Alex" name='Name' style={{ fontFamily: 'Quicksand',fontSize:'18px' }} required='true' value={name} onChange={(e) => setName(e.target.value)}></input></p>
  <p type="Email*"><input placeholder="samalex@yourmail.com" name='Email' style={{ fontFamily: 'Quicksand',fontSize:'18px' }} required='true' value={email} onChange={(e) => setEmail(e.target.value)}></input></p>
  <p type="Phone*"><input placeholder="+91 1234 567 890" name='Phone' style={{ fontFamily: 'Quicksand',fontSize:'18px'  }} required='true' value={phone} onChange={(e) => setPhone(e.target.value)}></input></p>
  
  <p type="Message*"><textarea name="Message" rows="1" placeholder="type your message here" style={{ fontFamily: 'Quicksand',fontSize:'18px'  }} required='true' value={msg} onChange={(e) => setMsg(e.target.value)}></textarea></p>
  <button style={{ fontFamily: 'Quicksand' ,fontSize:'16px' }} type='submit'>Send Message</button>

            </form>

            </div>
          </div>
         </div>
      </div> 
      
      <ToastContainer
      position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
      />
    </div>
  )
}

export default Contactedit
