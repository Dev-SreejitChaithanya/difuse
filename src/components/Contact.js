import React from 'react'
import { useState } from 'react';
import bg from '../assets/img/BackBG-10.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const Contact = () => {

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
      
      <div className="row align-items-center" style={{padding:'6rem 0rem',backgroundImage:`url(${bg})`}}>  
      {/* backgroundColor: 'rgb(215, 228, 237,0.7)' */}
         <div className="col-md-6" style={{paddingLeft:'6%'}}>
         <h3 className=" m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand'}}>Wanna Talk ?</h3>
         <h1 className="display-4 m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',textAlign:'center',padding:'1rem 1rem' }}>Let's Get In Touch</h1><br></br>
         <hr></hr>

         <h4 className="m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.8rem'}}><i className="fa-solid fa-location-dot fa-1x"> </i>  Kerala</h4>
         <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',padding:'0.2rem 2rem'}}>535/E, Technicity, Kannur-670643, Kerala, India.</h5>
         <h4 className="m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.8rem'}}><i className="fa-solid fa-location-dot fa-1x"> </i>  Tamilnadu</h4>
         <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',padding:'0.2rem 2rem'}}>P.NO-23, 2nd Cross Street, Iyyapa Nagar, Sembakkam, Chennai, Tamil Nadu 600073</h5>
         <div className="col-12">
          <div className='row align-items-center'>
          <div className="col-6">
            <h4 className="m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.5rem 0rem'}}><i className="fa-solid fa-envelope fa-1x"> </i>  Email</h4>
            <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',padding:'0.2rem 2rem'}}>hello@difuse.io</h5>
         </div>
         <div className="col-6">
          <h4 className="m-1" style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,1)',padding:'0.5rem 0rem'}}><i className="fa-solid fa-phone fa-1x"> </i>  Phone</h4>
          <h5 style={{fontWeight: 'bold', fontFamily: 'Quicksand',color: 'rgb(0,0,0,0.6)',textAlign:'center',padding:'0.2rem'}}>+91-490-2500991</h5>
         </div>
         </div>
         </div>
         </div>
         <div className="col-md-6">
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

export default Contact
