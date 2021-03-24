import React, {useEffect} from 'react';
import classes from './PhoneCard.module.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import cn from 'classnames'
import {CSSTransition, CSSTransitionGroup} from 'react-transition-group';



export const PhoneCard = ({name, snippet, imageUrl, id, className, inProp}) => {

    return (
        
        // <CSSTransition in={inProp} timeout={500} classNames="myNode"  >
 
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

                // </CSSTransition>

    )
};
