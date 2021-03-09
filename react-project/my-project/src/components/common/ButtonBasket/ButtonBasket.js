import React from 'react';
import classes from './ButtonBasket.module.css'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



export const ButtonBasket = ({name, snippet, imageUrl, id, className}) => {
    
    return (
        <Button className={classes.buttonBasket} variant="success">Add in Basket</Button>

    )
};
