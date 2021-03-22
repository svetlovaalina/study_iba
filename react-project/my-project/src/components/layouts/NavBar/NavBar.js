import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import {Profile} from '../../common/Profile'

export const NavBar = () => {

    return (
        <div className={classes.container}>
            <Navbar bg="primary" variant="dark" className="d-flex justify-content-between">
                <Navbar.Brand>
                    <Link to="/" className={classes.navBarLink}>
                        My-project</Link>
                </Navbar.Brand>
                <div className="ml-auto p-2">

                    <Navbar.Brand>
                        <Link to="/basket" className={classes.navBarLink}>
                            Basket</Link>
                    </Navbar.Brand>
                </div>
                <Profile className={classes.navBarLink}/>
            </Navbar>
        </div>
    )
}
