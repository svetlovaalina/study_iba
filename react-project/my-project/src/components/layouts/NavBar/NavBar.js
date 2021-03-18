import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';

export const NavBar = () => {
    const [anchorEl,
        setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open
        ? 'simple-popover'
        : undefined;

    const [profile,
        setProfile] = useState({})
    const [logInState,
        setLogInState] = useState()

    const logOut = (() => {
        setLogInState(false)
        if (!logInState) {
            window
                .gapi
                .auth2
                .getAuthInstance()
                .signOut()
        }
    })

    // useEffect(() => {     if (!logInState) {         window             .gapi
    // .auth2             .getAuthInstance()             .signOut()     } },
    // [logInState])

    var googleUser = {};
    var startApp = function () {
        window
            .gapi
            .load('auth2', function () {
                // Retrieve the singleton for the GoogleAuth library and set up the client.
                window.auth2 = window
                    .gapi
                    .auth2
                    .init({
                        client_id: '755442296670-hc7artjstip6s83jqubejavr6ptqogv9.apps.googleusercontent.com', cookiepolicy: 'single_host_origin',
                        // Request scopes in addition to 'profile' and 'email' scope: 'additional_scope'
                    });
                attachSignin(document.getElementById('customBtn'));
            });
    };

    function attachSignin(element) {
        window
            .auth2
            .attachClickHandler(element, {}, function (googleUser) {
                setLogInState(true);
                setProfile({
                    name: googleUser
                        .getBasicProfile()
                        .getName(),
                    email: googleUser
                        .getBasicProfile()
                        .getEmail(),
                    image: googleUser
                        .getBasicProfile()
                        .getImageUrl()
                });
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });

    }
    useEffect(() => {
        startApp()
    }, [])

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
                {!logInState && <div id="gSignInWrapper">
                
                    <div id="customBtn" class="customGPlusSignIn">
                    <Link className={classes.navBarLink}>
                        Log in</Link>
                        {/* <span class="icon"></span>
                        <span className={classes.buttonText}>Log in</span> */}
                    </div>
                </div>}

                {logInState && <div>
                    <Avatar alt="Remy Sharp" src={profile.image} onClick={handleClick}/>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}>
                        <div className={classes.avatarProfile}>
                            <Avatar alt="Remy Sharp" src={profile.image}/>
                            Name: {profile.name}
                            <br/>
                            Email: {profile.email}
                            <button onClick={logOut}>
                                Log out</button>

                        </div>

                    </Popover>
                </div>}
            </Navbar>

        </div>
    )
}