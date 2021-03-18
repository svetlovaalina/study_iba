import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profile, setProfile] = useState({});
  const [logInState, setLogInState] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


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

  const initLogin = () => {
    window
      .gapi
      .load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        window.auth2 = window
          .gapi
          .auth2
          .init({
            client_id: '755442296670-hc7artjstip6s83jqubejavr6ptqogv9.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email' scope: 'additional_scope'
          });
        // console.log(window.auth2.isSignedIn.get());
        window.auth2.isSignedIn.listen(isSignedIn => {
          if (isSignedIn) {
            const userProfile = window.auth2.currentUser.get().getBasicProfile();
            setLogInState(true);
            setProfile({
              name: userProfile.getName(),
              email: userProfile.getEmail(),
              image: userProfile.getImageUrl()
            })
          } else {
            setLogInState(false);
          }
        });

        attachSignIn(document.getElementById('customBtn'));
      });
  };

  const attachSignIn = element => {
    if (!logInState) {
      window
        .auth2
        .attachClickHandler(element, {}, googleUser => {
          /*const userProfile = googleUser.getBasicProfile();
          setLogInState(true);
          setProfile({
            name: userProfile.getName(),
            email: userProfile.getEmail(),
            image: userProfile.getImageUrl()
          });*/

        }, error => {
          alert(JSON.stringify(error, undefined, 2));
        });
    }
  }

  useEffect(() => {
    initLogin()
  }, [logInState])

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
        {
          !logInState &&
          <div id="gSignInWrapper">
            <div id="customBtn" className="customGPlusSignIn">
              <Link to="/" className={classes.navBarLink}>Log in</Link>
            </div>
          </div>
        }

        {logInState &&
        <div>
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
                Log out
              </button>

            </div>

          </Popover>
        </div>}
      </Navbar>

    </div>
  )
}
