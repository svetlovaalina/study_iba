import React, {useEffect, useState} from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {PhoneCard} from '../../layouts/PhoneCard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from 'react-bootstrap/Button'

export const Basket = () => {

    // const localStorageBasket =
    // JSON.parse(localStorage.getItem('phoneListBasket'))
    const [localStorageBasket,
        setLocalStorageBasket] = useState(JSON.parse(localStorage.getItem('phoneListBasket')))

    const deleteButton = (event) => {
        const idPhone = event
            .currentTarget
            .getAttribute('idPhone');
        setLocalStorageBasket(localStorageBasket.filter((el) => el.id != idPhone))
    }

    useEffect(() => {
        localStorage.setItem("phoneListBasket", JSON.stringify(localStorageBasket))
    }, [localStorageBasket])

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
                <Button variant="danger" idPhone={item.id} onClick={deleteButton}>
                    <ShoppingCartIcon/>
                </Button>

            </div>)
}
        </div>
    )
};