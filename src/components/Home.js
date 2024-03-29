import React, { useState } from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import "./css/home.css"
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'
const Home = function () {
  return (
    <div>
        <Carousel class= "carousel">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2021/04/02/19/13/sea-6145800_960_720.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2021/01/11/08/53/sky-5907605_960_720.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2021/04/01/20/49/trees-6143244_960_720.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}
export default Home;

