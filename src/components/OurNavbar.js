import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { FaSearch, FaRegHeart, FaShoppingCart, FaSyncAlt, FaUserAlt, FaBars, FaFacebook, FaTwitter, FaYoutube, FaDollarSign, FaTags, FaThumbsUp, FaCreditCard, FaTruckMoving, FaTruckLoading, FaTruckPickup  } from 'react-icons/fa';

function OurNavbar() {
  return (
    <div>
      <div className='top-header'>
        <Navbar className='top-navbar' bg='black' variant='black'>
          <Nav className="me-auto">
            <Nav.Link href="/"><FaFacebook className="social-icon" /></Nav.Link>
            <Nav.Link href="/"><FaTwitter className="social-icon" /></Nav.Link>
            <Nav.Link href="/"><FaYoutube className="social-icon" /></Nav.Link>
          </Nav>

          <p>
            <a href="" className="typewrite first-para" data-period="2000" data-type='["FREE SHIPPING ON ALL ORDERS OVER $75", "News: Delivery to the door is active!", "You can pay with cryptocurrencies!"]'>
              <span className="wrap"></span>
            </a>
          </p>

          <Nav className="me-auto top-nav">
            <Nav.Link href="/" className='top-header'>CART</Nav.Link>
            <Nav.Link href="/" className='top-header'>SEARCH</Nav.Link>
            <Nav.Link href="/" className='top-header'>HELP</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <div className="navbar main-menu">
        <Navbar bg="white" variant="white" expand="lg">
          <Container className='container'>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto navbar-menu">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/">SHOP</Nav.Link>
                <Nav.Link href="/">PRODUCT</Nav.Link>
                <Nav.Link href="/">TEMPLATE</Nav.Link>
                <Nav.Link href="/">PAGES</Nav.Link>
                <Nav.Link href="/">MEGA</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Brand href="/" className='navbar_brand'>JEWELRY STORE</Navbar.Brand>

            <Nav className="ms-auto">
              <Nav.Link href="/"><FaSearch /></Nav.Link>
              <Nav.Link href="/"><FaShoppingCart className="outline-icon" /></Nav.Link>
              <Nav.Link href="/"><FaRegHeart /></Nav.Link>
              <Nav.Link href="/"><FaSyncAlt className="rotate-icon" /></Nav.Link>
              <Nav.Link href="/"><FaUserAlt className="user-icon" /></Nav.Link>
              <Nav.Link href="/"><FaBars className="bars-icon" /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default OurNavbar;
