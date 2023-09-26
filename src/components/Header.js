import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/img/logo.svg';
const Header = () => {

  const menus = [{ title: 'Home', link: '/' },
  { title: 'About', link: '/About' },
  { title: 'Products', submenu: [{ title: "DPBX 50", link: "/Products/DPBX50" }, { title: "DMSBG 100", link: "/Products/DMSBG100" }] },
  { title: 'Download', link: '/Download'}, 
  { title: 'Support', submenu: [{ title: "Documentation", link: "https://docs.difuse.io/" }, { title: "Forum", link: "https://forum.difuse.io/" }, { title: "1-800-425-Difuse", link: "tel:1-800-425-difuse" }] },
  { title: 'Contact', link: '/Contact' },]
  return (
    <div style={{
      backgroundColor: 'rgb(255,255,250)', left: '0',
      top: '0',
      width: '100%'
    }}>

      <Navbar  key='lg' expand='lg' className="ms-2 me-2 sticky-top" style={{ backgroundColor: 'rgb(255,255,255)', }} >
      {/* 197, 203, 215 */}
        <Container fluid style={{ backgroundColor: 'rgb(255,255,255)' }}>
          <Navbar.Brand href="/" className="me-4 mt-1">
            <img
              src={logo}
              width="160"
              height="40"

              alt="Difuse logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            style={{ backgroundColor: 'rgb(254, 254, 254,0.7)' }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img
                  src={logo}
                  width="150"
                  height="50"
                  className="ms-5"
                  alt="Difuse logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>




              <Nav className="justify-content-end flex-grow-1 ms-5 me-3 mt-2">
                {menus.map((menu) => {

                  if (menu.link) {
                    return (
                      <Nav.Link href={menu.link} key={menu.link} className="me-4" style={{ fontFamily: 'Quicksand', fontSize: 16, fontWeight: 'light', color: '#031159' }}>{menu.title}</Nav.Link>
                    )
                  }
                  else {
                    return (
                      <NavDropdown

                        title={
                          <span style={{ fontFamily: 'Quicksand', fontSize: 16, fontWeight: 'light', color: '#031159' }}>{menu.title}</span>
                        }
                        id={`offcanvasNavbarDropdown-expand-lg`}
                        className="me-4"
                        key={menu.title}
                      >
                        {menu.submenu.map((sub) => {
                          return (
                            <NavDropdown.Item href={sub.link} key={sub.link}  style={{ fontFamily: 'Quicksand', fontSize: 16, color: '#031159', backgroundColor: 'rgb(254, 254, 254,0)' }} >{sub.title}</NavDropdown.Item>
                          )
                        })}
                      </NavDropdown>)
                  }
                })}
                {/* <Nav.Link href="/Login"   className="ms-4 disabled btn btn-sm rounded-pill" style={{ fontFamily: 'Quicksand', fontSize: 16, fontWeight: 'light' }}>Login</Nav.Link> */}
                <button type="button" style={{ fontFamily: 'Quicksand', fontSize: 16, backgroundColor: '#031159', color: 'white' }} className="btn btn-sm rounded-pill disabled me-4 pe-3 ps-3">Login</button>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header
