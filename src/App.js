import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { FaSearch, FaRegHeart, FaShoppingCart, FaSyncAlt, FaUserAlt, FaBars, FaFacebook, FaTwitter, FaYoutube, FaDollarSign, FaTags, FaThumbsUp, FaCreditCard, FaTruckMoving, FaTruckLoading, FaTruckPickup  } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import ProductCatalogue from './components/ProductCatalogue';
import Branding from './components/Branding';
import Features from './components/Features';
import OurNavbar from './components/OurNavbar';
import LastAdvertise from './components/LastAdvertise';

function App() {
  return (
    <div className="App">


          {/* NAVBAR */}
      <OurNavbar />



           {/* CAROUSEL */}
      <div className="carousel-container col-md-12">
      <Carousel style={{ width: '75%', margin: '0 0 0 20px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2022/02/accesories-full-1.jpg"
          alt="Image 1"
        />
         <Carousel.Caption>
      <h1>Meet the lines of <br></br> the millennium</h1>
      <p style={{color: "white"}}>Fashion is to please your eye. Shapes and proportions are for <br></br> your intellect. I have an obsession with details and pattern.</p>
      <button className="btn btn-dark" style={{marginRight: "20px"}}>Check Collection</button>
      <button className="btn btn-outline-light">Shop now</button>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2022/02/accesories-full-2.jpg"
          alt="Image 2"
        />
         <Carousel.Caption>
      <h1>New Modern <br></br> Collection</h1>
      <p style={{color: "white"}}>Elegance isn't solely defined by what you wear. It's how you <br></br> carry yourself, how you speak, what you read.</p>
      <button className="btn btn-outline-light">Shop now</button>
       </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
    <img src='https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2022/12/7.png'  className="carousel-image col-sm-12"/>
    </div>
    <h4 className='side-text'>GOLD PIERCING</h4>
    <h1 className='side-text-second'>FLASH SALE</h1>
    <h4 className='side-text-third'>15 NOV - 25 NOV</h4>
    <h4 className='side-text-fouth'>See More Products</h4>



            {/* FEATURES */}
<Features />



       {/* PRODUCT CATALOGUE */}
<div className='products'>
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37002518_40_B-450x450.webp" />
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37020108_OR-450x450.webp" />
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37042513_20_D2-500x500.webp" />
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37002520_20_B-450x450.webp" />
</div>



              {/* BRANDING */}
<Branding />




                             {/* PRODUCT CATALOGUE */}
<div className='bottom-products'>
<div className='products'>
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37040112_PL_B-450x450.webp" />
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37032503_OR-450x450.webp" />
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37042501_OR_B-500x500.webp" />
<ProductCatalogue src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2021/12/37010208_OR_D2-450x450.webp" />
</div>
</div>



            {/* LAST ADVERTISE */}
<LastAdvertise />



               {/* FOOTER */}
<Footer />

    </div>
  );
}

export default App;
