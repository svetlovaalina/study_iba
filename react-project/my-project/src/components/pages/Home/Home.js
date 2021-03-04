import React from 'react';
import classes from './Home.module.css';
import {PhoneCardList} from '../../layouts/PhoneCardList';
import {DisplayEditor} from '../../layouts/DisplayEditor';

export const Home = () => {

    return (
        <div className={classes.container}>
             <div>
             <DisplayEditor/>
            </div>
            <div className={classes.homeListPhone}>
                <PhoneCardList/>
            </div>
           
        </div>
    )
};
