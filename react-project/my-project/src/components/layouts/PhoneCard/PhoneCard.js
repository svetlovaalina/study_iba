import React from 'react';
import classes from './PhoneCard.module.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const PhoneCard = ({ name, snippet, imageUrl, id, className }) => {
  return (
    <div className={className}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img className={classes.image} alt="Phone image" src={'http://angular.github.io/angular-phonecat/step-14/app/' + imageUrl}/>
        </div>
        <div className={classes.mobileDescription}>
          {/* <a href={"/phonePage/"+id} className={classes.mobileName}>{name} </a> */}
          <Link to={"/phonePage/"+id} className={classes.mobileName}>{name} </Link>
          <p className={classes.mobileSnippet}>{snippet}</p>
        </div>
      </div>
    </div>
  )
};



