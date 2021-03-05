import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';

export const NavBar = () => {

    return (
        <div>

            <Navbar bg="primary" variant="dark">
                <Navbar.Brand >
                    <Link to="/" className={classes.navBarLink}>
                        My-project</Link>
                </Navbar.Brand>
            </Navbar>

        </div>
    )
}