import React from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useSelector} from "react-redux"

export const Basket = () => {
const listPhoneBasket = useSelector(state => state.listPhoneBasket)
    
    return (
        <div className={classes.container}>
            {listPhoneBasket.map(item => <h2>
                Hi, {item.name}
            </h2>)}

        </div>
    )
};
