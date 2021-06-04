import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function footer() {
  return (
    <footer className="mt-5">
      <Container fluid>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Proyecto Final
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Creado por Alfredo Quezada.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default footer;
