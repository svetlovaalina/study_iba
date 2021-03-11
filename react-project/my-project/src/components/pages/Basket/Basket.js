import React from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useSelector} from "react-redux"
import {PhoneCard} from '../../layouts/PhoneCard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Basket = () => {
    const localStorageBasket = JSON.parse(localStorage.getItem('phoneListBasket'))

    return (
        <div className={classes.container}>
            {localStorageBasket && localStorageBasket.map(item => 
            <div className={classes.phoneCardBasket}>
                <PhoneCard
                    className={classes.localStorageBasket}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageUrl={item.images[0]}
                    snippet={item.description}/>
                < ShoppingCartIcon/>
            </div>)
            }
        </div>
    )
};