import React from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import store from "../../../store/store"
import action_1 from "../../../store/actionCreators/action_1"


export const Basket = () => {
    
    const  listPhoneBasket = store.getState().listPhoneBasket
    console.log(listPhoneBasket)
    return (
        <div className={classes.container}>

            {listPhoneBasket.map(item =>  <h2> Hi, {item.name}  </h2>)}
        </div>
    )
};
