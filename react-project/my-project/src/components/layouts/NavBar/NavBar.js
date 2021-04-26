import React from 'react';
import classes from './NavBar.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar';
import { Profile } from '../../common/Profile';

export const NavBar = () => {
  return (
    <div className={classes.container}>
      <Navbar bg="primary" variant="dark" className="d-flex justify-content-between">
        <Navbar.Brand>
          <NavLink exact to="/" className={classes.navBarLink} activeStyle={{ fontWeight: 'bold' }}>
            My-project
          </NavLink>
        </Navbar.Brand>
        <div className="ml-auto p-2">
          <Navbar.Brand>
            <NavLink to="/basket" className={classes.navBarLink} activeStyle={{ fontWeight: 'bold' }}>
              Basket
            </NavLink>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Brand>
            <NavLink to="/about-us" className={classes.navBarLink} activeStyle={{ fontWeight: 'bold' }}>
              About us
            </NavLink>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Brand>
            <NavLink to="/random" className={classes.navBarLink} activeStyle={{ fontWeight: 'bold' }}>
              Random
            </NavLink>
          </Navbar.Brand>
        </div>

        <Profile className={classes.navBarLink} />
      </Navbar>
    </div>
  );
};
