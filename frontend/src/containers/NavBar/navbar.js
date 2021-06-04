/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const A = styled.a`
  color: ${({ theme }) => theme.text} !important;
`;

function navbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#">
        <Link to="/home">
          <A className="nav-link-name" href="#"> Alfredo Quezada</A>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
}

export default navbar;
