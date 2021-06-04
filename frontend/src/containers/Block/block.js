/* eslint-disable no-unused-vars */
import React from 'react';
import './block.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// eslint-disable-next-line no-unused-vars

export default function block() {
  return (
    <Container className="tranparent" fluid>
        <Row className="justify-content-center py-5">
          <Col md={9} sm={5}>
            <div className="content">
              <div className="container">
                <span className="titleuno">Bienvenido, </span>
                <span className="titledos">Soy Alfredo Quezada</span>
                <span className="titletres">Un simple estudiante.</span>
                
              </div>
            </div>
          </Col>
        </Row>
    </Container>
  );
}
