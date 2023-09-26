import React from 'react'
import './Footer.css'
import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <div className="footer-dark" style={{backgroundColor:'#ffffff'}}>
       {/* '#e6eafe' */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 item text ">
                    <img src={logo}
                      width="150"
                      height="40"
                      className='logofooter'
                      alt="Difuse logo"
                       />
                          
                     
                    </div>
                    <div className="col-md-2 item text" style={{paddingTop:'5px'}}>
                    <a href='/Careers' style={{textDecoration:'none',color:'#031159',fontFamily:'QuickSand'}}>Careers</a>  
                    </div>
                    <div className="col-md-2 item text" style={{paddingTop:'5px'}}>
                    <a href='/Privacy' style={{textDecoration:'none',color:'#031159',fontFamily:'QuickSand'}}>Privacy Policy</a> 
                    </div>

                    <div className="col-md-4 item social" style={{paddingTop:'2px'}}>
                        <a href="https://www.facebook.com/DifuseHQ"><i className="fa-brands fa-facebook" style={{color: '#031159'}}></i></a>
                        <a href="https://www.linkedin.com/company/info-difuse/"><i className="fa-brands fa-linkedin-in" style={{color: "#031159"}}></i></a>
                        <a href="https://twitter.com/InfoDifuse"><i className="fa-brands fa-twitter" style={{color: '#031159'}}></i></a>
                        <a href="https://discord.gg/u6RupFDMp9"><i className="fa-brands fa-discord" style={{color: '#031159'}}></i></a>
                        <a href="https://github.com/DifuseHQ"><i className="fa-brands fa-github" style={{color: '#031159'}}></i></a>
                    </div>
                </div>
                <p className="copyright" style={{paddingTop:'2px'}}>Difuse.IO © 2023</p>
            </div>
        
    </div>

  )
}

export default Footer
