import React from 'react'
import productI from '../assets/img/ProductTV.png'
import wireGuard from '../assets/img/wireGuard.png'
import image from '../assets/img/BackBG-6.jpg'
import technicalI from '../assets/img/layoutDifuse.svg'
import tor from '../assets/img/tor.png'
import asterisk from '../assets/img/Asterisklogo.png'
import { Slide, Fade, Flip } from 'react-reveal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';
const Product = (props) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} style={{padding:'1rem'}}>
      {props}
    </Tooltip>
  );
  return (
    <div> 
      {/* HERO SECTION */}
      <main role="main" style={{ paddingTop: '40vh',paddingBottom: '40vh',paddingLeft: '10vh',paddingRight: '10vh', backgroundImage: `url(${image})` }}>
      <Fade top><h1 className="display-1 cover-heading  sm-12" style={{ fontWeight: 'bold', fontFamily: 'Quicksand' }}>Built for reliability.</h1></Fade>
      <Fade top><p className="lead " style={{ fontFamily: 'Quicksand' }}>The ARM powered device with 2GB RAM and 8GB eMMC storage is enclosed in a fanless aluminium case with a passive cooling system that ensures the device runs reliably in any environment.<br /> The device includes 2 SFP ports, 5 Gigabit Ethernet ports, 1 USB 3.0 port, 1 SIM card slot and an M.2 SSD slot for storage expansion.</p></Fade>
      </main>
      {/*PRODUCT DESCRIPTION*/}
      <div className="row align-items-center pt-5 pb-5" style={{ backgroundColor: 'rgb(215, 228, 237,0.7)' }}>  
         <div className="col-md-6">
          <div className="ud-about-image">
          <Slide left><img src={productI} alt="about" style={{ width: '40vw' }} className='col-8'></img></Slide>
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
      {/*FEATURES SECTION */}
      <div className="row align-items-center p-5" style={{ backgroundColor: 'rgb(244,254,254)'}}>
        <div className="row" style={{padding:'6rem 2rem'}}>
          <Fade top><h1 className="display-3 cover-heading  m-3" style={{fontWeight: 'bold', fontFamily: 'Quicksand' }}>Features</h1></Fade>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1  rounded mt-2  ">
                <div className="ud-single-feature"  >
                  <div>
                  <Flip right><i className="fa-solid fa-microchip fa-4x" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}/></Flip>
                  </div>
                  <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Architecture</h3>
                  {/* //Top-Notch  */}
                  <p className="ud-feature-desc">
                  4 Core CPU, 2GB of RAM and 8 GB eMMC with upto 5.9
                  GHz spectrum support enabling additional high-speed
                  80 and 160 MHz channels for WiFi apart from 20 and
                  40 Mhz
                  </p>
                  </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature" >
                <div >
                <Flip right><i className="fa-solid fa-house-signal fa-4x" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}/></Flip>
                </div>
                <div className="ud-feature-content">
                <h3 className="ud-feature-title ">Networking</h3>
                {/* Accelerated  */}
                <p className="ud-feature-desc">
                  2x 2.5GbE SFP ports, 1 GbE WAN port and 4 GbE LAN
                  ports will let you connect to a wide array of devices
                  and the fastest of ISPs
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div >
                  {/* style={{marginTop:'2REM'}} */}
                  <Flip right><img src={wireGuard} alt='wireguard' height="100vh"></img></Flip>
                </div>
                <div className="ud-feature-content" >
                <h3 className="ud-feature-title">WireGuard</h3>
                <p className="ud-feature-desc">
                  Leverages WireGuard for secure and fast private network that give near wire-speeds 
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature" >
                <div>
                {/* style={{marginTop:'2REM'}}  */}
                <Flip right><img src={asterisk} alt='asterisk'  height="100vh"></img></Flip>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Asterisk PBX </h3>
                  <p className="ud-feature-desc">
                    Equipped with the LTS version of asterisk with an
                    exceedingly capable GUI, the DMSBG-100 caters to all
                    your telephony needs with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div>
                <Flip right><i className="fa-solid fa-shield-halved fa-4x" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}></i></Flip>
                </div>
                <div className="ud-feature-content">
                <h3 className="ud-feature-title"> Secure By Default</h3>
                <p className="ud-feature-desc">
                  The device uses NFTables to provide in-kernel packet
                  classification that provides protection against
                  unwanted network activity
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div>
                <Flip right><i className="fa-solid fa-dice-d20 fa-4x" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}></i></Flip>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Adaptative Rules</h3>
                  <p className="ud-feature-desc">
                      The DMSBG-100 comes with the ability to automatically
                      ban malicious entities and also provides configurable
                      lists that can be used by the user to setup firewalls.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div>
                <Flip right><img src={tor} alt='tor'height="100vh"></img></Flip>
                </div>
                <div className="ud-feature-content">
                <h3 className="ud-feature-title">TOR</h3>
                <p className="ud-feature-desc">
                  Optional TOR integration with selective routing for privacy and anonymity
                </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 p-4 pb-1 rounded mt-2   ">
              <div className="ud-single-feature"  >
                <div>
                <Flip right><i className="fa-solid fa-ban fa-4x align-items-center" style={{color: '#031159',paddingBottom:'0.5rem',paddingTop:'1.7rem'}}></i></Flip>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Adblock</h3>
                  <p className="ud-feature-desc">
                    You can block ads and other unwanted content for all your devices
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/*TECHNICAL SPECIFICATIONS(Add image with tooltip on it with all details in the datasheet*/}
      <div className="row align-items-center pt-5 pb-5" style={{ backgroundColor: 'rgb(215, 228, 237,0.7)' }}>  
         <div className="col-md-6">


 
         <Fade left><h1 className="display-5 cover-heading  m-3" style={{ padding:'3rem',fontWeight: 'bold', fontFamily: 'Quicksand' }}>Technical Specifications</h1></Fade>
          <div className="ud-about-image">
          
          
          <div className="ofeed-intersection-area">
  
  <div className="ofeed-shoppable-image">
    
      <span className="ofeed-aspect-ratio-box ofeed-aspect-ratio-box--portrait">
      <Slide left><img className="ofeed-image" alt='productLayout' src={technicalI}/></Slide>
      </span>
   
      <ul style={{listStyle:'none'}} >

        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '77.3%'}} >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('4 LAN Ports for extended connectivity')}
      ><div className="ofeed-shoppable-image__dot" ></div></OverlayTrigger>
        </li>
      


        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '30.7%'}} >
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('USB Interface')}
      >
          <div className="ofeed-shoppable-image__dot"></div>
          </OverlayTrigger>
        </li>
     


        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '23.4%'}}>
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('DC power port')}
      >
          <div className="ofeed-shoppable-image__dot" ></div> 
          </OverlayTrigger>         
        </li>
      


        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '43.4%'}}>
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('SFP LAN & SFP WAN ports')}
      >
          <div className="ofeed-shoppable-image__dot" ></div>  
          </OverlayTrigger>       
        </li>
      


        <li className="ofeed-shoppable-image__area" style={{top: '48.7217%', left: '58.2%'}}>
        <OverlayTrigger
        placement="bottom"
        delay={{ show: 10, hide: 40 }}
        overlay={renderTooltip('WLAN')}
      ><div className="ofeed-shoppable-image__dot" ></div>
       </OverlayTrigger>         
        </li>
     

      </ul>

  </div>

      </div>
          </div>
         </div>
         <div className="col-md-6">
          <div className="ud-about-content-wrapper"  style={{ visibility: 'visible' }}>
            <div className="ud-about-content" style={{ fontFamily: 'Quicksand' }}>
            <Slide right>
            <Accordion  className='m-5 ' >
      <Accordion.Item eventKey="0"  className='m-2' >
        <Accordion.Header>Hardware</Accordion.Header>
        <Accordion.Body >
          <ul style={{listStyle:'none'}}>
            <li className='m-2'><p><b>CPU</b>    - Quad-core 1.8 GHz</p></li>
            <li className='m-2'><p><b>Processing Power</b>   - 18,000 DIPS</p></li>
            <li className='m-2'><p><b>Memory</b>   - LPDDR3 2GB</p></li>
            <li className='m-2'><p><b>Antenna type</b>   - Omnidirectional high-gain dipole (2.4 GHz/5 GHz)</p></li>
            <li className='m-2'><p><b>Ethernet and SFP ports</b>   -
              1 x Gigabit WAN,
              2 x 2.5GbE SFP, 
              4 x Gigabit LAN</p></li>
            <li className='m-2'><p><b>External ports</b>   - 1 x USB 3.2 Gen 1 (Type-A)</p></li>
            <li className='m-2'><p><b>Size(HxW)</b>    - 100.5 x 148mm</p></li>
            <li className='m-2'><p><b>AC adapter input voltage</b>   - 12V/2A with DC in</p></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='m-2'>
        <Accordion.Header>Wireless</Accordion.Header>
        <Accordion.Body>
        <ul style={{listStyle:'none'}}>
         
            <li className='m-2'><p><b>Wireless standards</b>    - IEEE 802.11 a/n/ac/ax simultaneous dual-band </p></li>
            <li className='m-2'><p><b>Max. data rate</b>   - 2.4 GHz: Up to 600 Mbps, 5 GHz-2: Up to 1400 Mbps</p></li>
            <li className='m-2'><p><b>Wireless security</b>   - WPA/WPA2-Personal, WPA/WPA2-Enterprise, WPA2/WPA3-Personal, WPA3-Personal/Enterprise, Wi-Fi Enhanced Open 
(OWE), Wi-Fi Protected Setup (WPS) 2.0</p></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"  className='m-2'>

        <Accordion.Header>Features</Accordion.Header>
        <Accordion.Body>
        <ul style={{listStyle:'none'}}>
         
            <li className='m-2'><p><b>Operation modes</b>    - AP Mode and Router mode </p></li>
            <li className='m-2'><p><b>DHCP</b>   - Server/client mode, client list, MAC address reservation</p></li>
            <li className='m-2'><p><b>Firewall Rules</b>   - Unlimited Firewall rules (Inlcuidng port forwards and NAT Rules)</p></li>
            <li className='m-2'><p><b>Parental control</b>   - Per-device configurable internet speeds, allow block list and DNS-based web filter with built-in database</p></li>
            <li className='m-2'><p><b>QoS and SQM</b>   - Per-device custom speed, traffic monitoring, per-application limits, and advanced usage reporting.
SQM based on automated test to mitigate bufferbloat</p></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3"  className='m-2'>
        <Accordion.Header>Certification</Accordion.Header>
        <Accordion.Body>
        <ul style={{listStyle:'none'}}>
          
 
            <li className='m-2'><p><b>Certification</b>    - Wi-Fi Certified, CE, FCC, WPA ETC </p></li>
            <li className='m-2'><p><b>Environmental safety</b>   - RoHS Compliant</p></li>
            

          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
             </Slide> 
            </div>
          </div>
         </div>
      </div>
      {/*FAQ */}
      <div className="row align-items-center  pb-5" style={{ backgroundColor: '#f4fefe' }}> 
      <Fade top><h1 className="display-3 cover-heading" style={{fontWeight: 'bold', fontFamily: 'Quicksand',margin:'6rem 0rem' }}>FAQ</h1></Fade>
         <div className="col-md-6">
          
          <div className="ud-about-image">
          <Accordion  className='m-4' >
      <Accordion.Item eventKey="0"  className='m-2' >
        <Accordion.Header className='m-2'>Are there recurring costs?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>There are no monthly or yearly costs. You pay once and you get 2 years of basic support and updates.
If you need more complicated support or customizations, we can provide that for an additional fee.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='m-2' >
        <Accordion.Header className='m-2'>Is Difuse open source?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Our underlying operating system difOS is based on OpenWRT and is opensource under the GPL license available here on github. The Difuse GUI is not opensource and is proprietary software.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"  className='m-2' >
        <Accordion.Header className='m-2'>Can I use the asterisk extensions remotely?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>In short yes, you can use all extensions remotely without the use of a VPN. A Large number of ISPs block SIP traffic. To circumvent this we have implemented end-to-end encryption using the native asterisk PJSIP stack. This allows you to use the extensions remotely without any issues.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3"  className='m-2' >
        <Accordion.Header className='m-2'>Can I generate SSL certificates within the Difuse platform?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Yes, Difuse supports ACME certificate generation using a user-friendly UI. This ensures that businesses can easily secure their web services without the complexities typically associated with SSL certificate processes.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4"  className='m-2' >
        <Accordion.Header className='m-2'>How does Difuse handle bandwidth management?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Difuse incorporates a simple bandwidth management system. Using an intuitive UI, administrators can easily allocate bandwidth, ensuring optimal distribution and preventing network congestion.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5"  className='m-2' >
        <Accordion.Header className='m-2'>Which VPN technologies does the Difuse Business Gateway support?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Difuse integrates multiple VPN solutions: IPSec for wide-ranging compatibility; WireGuard for efficiency; Tailscale for user-friendly connectivity; and Cloudflare Tunnel for ensuring secure and speedy connections even through multiple NAT layers.</p>         
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>
          </div>
         </div>
         <div className="col-md-6">
          
          <div className="ud-about-image">
          <Accordion  className='m-4' >
          <Accordion.Item eventKey="0"  className='m-2' >
        <Accordion.Header className='m-2'>How fast is the WiFi?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>The WiFi is 802.11ax (WiFi 6) and can reach speeds of up to 1.8Gbps. The WiFi is dual band and supports both 2.4Ghz and 5Ghz.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='m-2' >
        <Accordion.Header className='m-2'>How many WireGuard Peers can I have?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>You can add as many WireGuard peers as you want. The only limitation is the bandwidth and at very high numbers the hardware too, we have tested upto 30 peers which is the most any home or small office would need.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"  className='m-2' >
        <Accordion.Header className='m-2'>Is SQM supported?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Yes, SQM (CAKE) is supported by default. You can change the settings in the GUI to suit your needs with a few clicks.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3"  className='m-2' >
        <Accordion.Header className='m-2'>Can I transition from traditional telephony to Asterisk on Difuse?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Difuse, with Asterisk integration, facilitates a smooth transition from traditional landlines to VoIP communications, providing efficiency and notable cost savings.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4"  className='m-2' >
        <Accordion.Header className='m-2'>How secure are communications with Difuse?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>With features like encrypted voice communication and multiple VPN solutions (IPSec, WireGuard, Tailscale, and Cloudflare Tunnel). And secured web services through ACME-generated certificates, Difuse prioritizes comprehensive security in all business communications.</p>         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5"  className='m-2' >
        <Accordion.Header className='m-2'>How can I get support for my Difuse Business Gateway?</Accordion.Header>
        <Accordion.Body >
<p className='m-2'>Difuse offers robust customer support. Whether you have queries about Asterisk or VPN integrations. For other functionalities, our dedicated team is always ready to assist.</p>         
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>
          </div>
         </div>
      </div>




    </div >
  );
}
export default Product