import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink,Link} from 'react-router-dom';
const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
        <Link to="/" className='navbar-brand'>Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link" >Signin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" >Signup</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<<<<<<< HEAD
export default Header;
=======
/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Container> */}
            <Navbar.Brand href="#home">&nbsp;&nbsp;Admin Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">SignIn&nbsp;&nbsp;</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    )
}
export default Header 
>>>>>>> adff7bed8222a481dd268f859feb43ade255dc1c
