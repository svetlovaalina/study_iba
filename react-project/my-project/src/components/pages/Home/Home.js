import React from 'react';
import classes from './Home.module.css';
import {PhoneCardList} from '../../layouts/PhoneCardList';

export const Home = () => {

    return (
        <div className={classes.container}>
             <div>
             
            </div>
            <div className={classes.homeListPhone}>
                <PhoneCardList/>
            </div>
           
        </div>
    )
};
