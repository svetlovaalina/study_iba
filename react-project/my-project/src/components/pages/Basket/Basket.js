import React, {useEffect, useState} from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {PhoneCard} from '../../layouts/PhoneCard';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';

export const Basket = () => {

    const [localStorageBasket,
        setLocalStorageBasket] = useState(JSON.parse(localStorage.getItem('phoneListBasket')))

    const deleteButton = (event) => {
        const idPhone = event
            .currentTarget
            .getAttribute('idPhone');
        setLocalStorageBasket(localStorageBasket.filter((el) => el.id !== idPhone))
        // debugger;
    }
    
    
    useEffect(() => {
        localStorage.setItem("phoneListBasket", JSON.stringify(localStorageBasket))

    }, [localStorageBasket])

    return (
        <div className={classes.container}>

            {localStorageBasket && localStorageBasket.map(item => <div className={classes.phoneCardBasket}>
                <PhoneCard
                    className={classes.localStorageBasket}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageUrl={item.images[0]}
                    snippet={item.description}/>
                <Button variant="danger" idPhone={item.id} onClick={deleteButton}>
                    <DeleteIcon/>
                </Button>

            </div>)
            } 
        </div>
    ) 
};