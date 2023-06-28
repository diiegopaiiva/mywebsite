import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../imagens/slide1.png'
import slide2 from '../imagens/slide2.png'
import slide3 from '../imagens/slide3.png'
import '../App.css'
import '../carousel.css'

function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item className="">
          <img
            className=" mw-100 mh-100 carousel-image"
            style={{whidth: '120%'}}
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3 className="caption-title">First slide label</h3>
            <p className="caption-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="carousel-button">Clique aqui</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block mw-100 carousel-image"
            src={slide2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block mw-100 carousel-image"
            src={slide3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;