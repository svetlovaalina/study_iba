import React from 'react';
import classes from './Footer.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const Footer = () => {
  return (
    <div className={classes.container}>
      <Navbar bg="primary" variant="dark" fixed="bottom" className="d-flex justify-content-between">
        <div className={classes.siteTag}>
          <p> ©2021 My-project</p>
        </div>
        <div className={classes.sotialContainer}>
          <div className={classes.vk}>
            <a href="https://vk.com/" className={classes.iconVk} target="_blank"></a>
          </div>
          <div className={classes.mail}>
            <a href="mailto:stevtola.alina33@mail.ru" target="_blank">
              <MailOutlineIcon className={classes.iconMail} />
            </a>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
