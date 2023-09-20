import React from 'react'
import './Footer.css'
import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <div className="footer-dark" style={{backgroundColor:'#ffffff'}}>
       {/* '#e6eafe' */}
            <div className="container">
                <div className="row">
                <div className="col-md-6 item text ">
                    <img
              src={logo}
              width="150"
              height="40"
            className='logofooter'
              
              alt="Difuse logo"
            />
                        
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#1">Web design</a></li>
                            <li><a href="#2">Development</a></li>
                            <li><a href="#3">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#home">Company</a></li>
                            <li><a href="#ho">Team</a></li>
                            <li><a href="#hi">Careers</a></li>
                        </ul>
                    </div>

                    <div className="col item social">
                        <a href="https://www.facebook.com/DifuseHQ"><i className="fa-brands fa-facebook" style={{color: '#031159'}}></i></a>
                        <a href="https://www.linkedin.com/company/info-difuse/"><i className="fa-brands fa-linkedin-in" style={{color: "#031159"}}></i></a>
                        <a href="https://twitter.com/InfoDifuse"><i className="fa-brands fa-twitter" style={{color: '#031159'}}></i></a>
                        <a href="https://discord.gg/u6RupFDMp9"><i className="fa-brands fa-discord" style={{color: '#031159'}}></i></a>
                        <a href="https://github.com/DifuseHQ"><i className="fa-brands fa-github" style={{color: '#031159'}}></i></a>
                        </div>
                </div>
                <p className="copyright">Difuse.IO © 2023</p>
            </div>
        
    </div>

  )
}

export default Footer
