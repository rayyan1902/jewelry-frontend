import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "./ImageSlider.css"
function ImageSlider() {
    return (
        <Carousel style={{ width: '80%', margin: '0 auto' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2022/02/accesories-full-2.jpg"
              alt="Image 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://f8g8b9p5.rocketcdn.me/themes/goldsmith/wp-content/uploads/2022/02/accesories-full-1.jpg"
              alt="Image 2"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items for additional slides */}
        </Carousel>
      );
    }

export default ImageSlider;
