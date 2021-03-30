import React, {useState, useEffect} from 'react';
import classes from './ButtonMakeOrder.module.css'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"; // ?!


export const ButtonMakeOrder = () => {
    // const localStorageBasket = JSON.parse(localStorage.getItem('phoneListBasket'));

    return (
        <div className={classes.containerOrder}>
            <Link to="/formOrder">
                <Button variant="success" >
                    Make order
                </Button>
            </Link>
        </div>
    )
}