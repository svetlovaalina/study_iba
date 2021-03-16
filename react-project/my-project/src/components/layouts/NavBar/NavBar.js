import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import {Basket} from "../../pages/Basket";

export const NavBar = () => {

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

   
    return (
        <div className={classes.container}>
            <Navbar bg="primary" variant="dark" class="d-flex justify-content-between">
                <Navbar.Brand >
                    <Link to="/" className={classes.navBarLink}>
                        My-project</Link>
                </Navbar.Brand>
                <div class="ml-auto p-2">
                    <Navbar.Brand >
                        <Link to="/basket" className={classes.navBarLink}>
                            Basket</Link>
                    </Navbar.Brand>
                </div>
                <div class="g-signin2" data-onsuccess={onSignIn}></div>
            </Navbar>
          
  

        </div>
    )
}