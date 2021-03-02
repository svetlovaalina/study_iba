import React from 'react';
import classes from './Home.module.css';
import {PhoneCardList} from '../../layouts/PhoneCardList';


export const Home = () => {

    return (
        <div className={classes.container}>
           
            <PhoneCardList/>

        </div>
    )
};
