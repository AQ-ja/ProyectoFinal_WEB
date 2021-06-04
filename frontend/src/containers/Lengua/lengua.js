import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/js.png';
import img2 from '../Images/wap.png';
import img3 from '../Images/python.png';
import img4 from '../Images/c#.png';
import './lengua.css';
// eslint-disable-next-line no-unused-vars
function lengua(props) {
  return (
    <Container fluid className="lengua-container">
      <Row>
        <Col className="left" sm={12} md={7} lg={6}>
          <h1 className="title"> En mi repertorio </h1>
          <h2 className="subtitle"> se encuentran </h2>
        </Col>
        <Col className="right" sm={12} md={5} lg={6}>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={img4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default lengua;

/* <Container className="middle-left">
        <Row>
          <Col> programming languages </Col>
        </Row>
      </Container>
      <Container className="middle-right">
        <Row>
          <Col> programming languages </Col>
        </Row>
      </Container> */
