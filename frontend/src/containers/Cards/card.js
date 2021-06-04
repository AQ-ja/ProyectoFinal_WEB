import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../Images/ld2.gif';
import './card.css';

// eslint-disable-next-line no-unused-vars
function direction(props) {
  return (
    <Container fluid className="lengua-container">
      <Row>
        <Col className="xop" sm={12} md={7} lg={6}>
          <h1 className="h1"> Algunos </h1>
          <h2 className="h2"> TRABAJOS </h2>
        </Col>
        <Col className="right" sm={12} md={5} lg={6}>
          <Image src={img1} />
        </Col>
      </Row>
    </Container>
  );
}

export default direction;
