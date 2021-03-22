import React from 'react';
import classes from './PhoneCard.module.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import cn from 'classnames'

export const PhoneCard = ({name, snippet, imageUrl, id, className}) => {

    return (
        <div key={id} className={cn(className, classes.container)}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.image}
                    alt="Phone image"
                    src={'http://angular.github.io/angular-phonecat/step-14/app/' + imageUrl}/>
            </div>
            <div className={classes.mobileDescription}>
                <Link to={"/phonePage/" + id} className={classes.mobileName}>{name}
                </Link>
                <p className={classes.mobileSnippet}>{snippet}</p>
            </div>
        </div>
    )
};
