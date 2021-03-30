import React, {useEffect, useState, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; // ?!
import classes from './Profile.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import Button from 'react-bootstrap/Button'
import cn from 'classnames'
import {useDispatch} from "react-redux"
import {getProfileData} from '../../../store/actionCreators/getProfileData'
// import {getProfileData} from 'src/store/actionCreators/getProfileData';

export const Profile = ({className}) => {
    const dispatch = useDispatch();
    
    const [anchorEl,
        setAnchorEl] = useState(null);
    const [profile,
        setProfile] = useState({});
    const [logInState,
        setLogInState] = useState(false);
    const [openPopover,
        setOpenPopover] = useState(false)
    const buttonRef = useRef(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopover(true)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenPopover(false)
    };

    const id = openPopover ? 'simple-popover' : undefined;

    const logOut = (() => {
        setLogInState(false)
        window.gapi.auth2.getAuthInstance().signOut()
        setOpenPopover(false)
    })

    const initLogin = () => {
        window.gapi.load('auth2', () => {
                window.auth2 = window.gapi.auth2.init({
                        client_id: '755442296670-hc7artjstip6s83jqubejavr6ptqogv9.apps.googleusercontent.com', 
                        cookiepolicy: 'single_host_origin',
                    });
                window.auth2.isSignedIn.listen(isSignedIn => {
                        if (isSignedIn) {
                            const userProfile = window.auth2.currentUser.get().getBasicProfile();
                           
                            dispatch(getProfileData(userProfile))
                            
                            setLogInState(true);
                            setProfile({
                                name: userProfile.getName(),
                                email: userProfile.getEmail(),
                                image: userProfile.getImageUrl()
                            })
                        } 
                        else {
                            setLogInState(false);
                        }
                    });
                attachSignIn(buttonRef.current);
        });
    };

    const attachSignIn = element => {
        if (!logInState) {
            window.auth2.attachClickHandler(element, {}, googleUser => {});
        }
    }

    useEffect(() => {      
        initLogin()
    }, [logInState])

    return (
    <> 
    { !logInState && 
        <div id="gSignInWrapper">
            <div id="customBtn" ref={buttonRef} className="customGPlusSignIn">
                <Navbar.Brand>
                    <Link to="/" className={cn(className)}>Log in</Link>
                </Navbar.Brand>
            </div>
        </div>
    }

    {logInState && 
    <div>
        <Avatar alt="Remy Sharp" src={profile.image} onClick={handleClick}/>
        <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={
            {vertical: 'bottom',
            horizontal: 'left'}}
            transformOrigin={
            {vertical: 'top',
            horizontal: 'right'}}>
        <div className={classes.avatarProfile}>
            <Avatar alt="Remy Sharp" src={profile.image}/>
                <b>Name:</b>
                {profile.name}
                <b>Email:</b>
                {profile.email}
            <Button variant="secondary" onClick={logOut} className={classes.logOutButton}>
                Log out
            </Button>
        </div>
            </Popover>
        </div>
    } 
    </>
    ) 
}