import React, {useState} from 'react';
import classes from './ButtonBasket.module.css'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import actionAddPhoneToBasket from "../../../store/actionCreators/actionAddPhoneToBasket"
import {useDispatch} from "react-redux"

export const ButtonBasket = ({phoneData}) => {

    const dispatch = useDispatch();
    const [stateBasket,
        setStateBasket] = useState("AddToBasket");

    const addToBasket = () => {
        setStateBasket('GoInBasket')
        dispatch(actionAddPhoneToBasket(phoneData))
    }

    return (
        <div className={classes.containerBasket}>
            <div className={classes.containerAddToBasket}>
                {stateBasket === "AddToBasket" && (
                    <Button
                        variant="success"
                        className={classes.buttonAddToBasket}
                        onClick={addToBasket}>
                        <AddShoppingCartIcon/>
                    </Button>
                )}
            </div>
            <div className={classes.containerGoInBasket}>
                {stateBasket === "GoInBasket" && (
                    <Button variant="success" className={classes.buttonGoInBasket}>
                        <CheckCircleIcon/>
                        <ShoppingCartIcon/>
                    </Button>
                )}
            </div>
        </div>
    )
}