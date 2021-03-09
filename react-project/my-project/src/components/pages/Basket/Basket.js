import React from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import store from "../../../store/store"
import action_1 from "../../../store/actionCreators/action_1"

export const Basket = () => {
    store.dispatch(action_1("Some value"));
    return (
        <div className={classes.container}>

<h1>Hi, Alinochka!!!!</h1>
        </div>
    )
};
