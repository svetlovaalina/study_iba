import React from 'react';
import classes from './Footer.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar';
// import { Profile } from '../../common/Profile';

export const Footer = () => {
  return (
    <div className={classes.container}>
      <Navbar bg="primary" variant="dark" fixed="bottom" className="d-flex justify-content-between">
        <Navbar.Brand></Navbar.Brand>
        <div className="ml-auto p-2">
          <Navbar.Brand></Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
};
