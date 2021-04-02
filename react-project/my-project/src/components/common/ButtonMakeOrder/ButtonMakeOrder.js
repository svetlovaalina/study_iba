import React, {useState, useEffect} from 'react';
import classes from './ButtonMakeOrder.module.css'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

export const ButtonMakeOrder = () => {

    return (
        <div className={classes.containerOrder}>
            <Link to="/form-order">
                <Button variant="success">
                    <DoneOutlineIcon/>
                    Make order
                </Button>
            </Link>
        </div>
    )
}