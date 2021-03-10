import React, {useState, useEffect} from 'react';
import classes from './DisplayEditor.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Search} from "../Search"
import {Sort} from "../Sort"

export const DisplayEditor = () => {
    return (
        <div className={classes.displayEditor}>
            <Search/>
            <Sort/>
        </div>
    )
}
