import React from 'react';
import classes from './Home.module.css';
import {HomePhoneList} from '../../layouts/HomePhoneList'
import {DisplayEditor} from '../../layouts/DisplayEditor';

export const Home = () => {
    return (
        <div className={classes.container}>
            <div className={classes.displayEditor}>
                <DisplayEditor/>
            </div>
            <div className={classes.homeListPhone}>
                <HomePhoneList/>
            </div>
        </div>
    )
};
