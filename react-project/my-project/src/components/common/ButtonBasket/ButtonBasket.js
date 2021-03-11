import React, {useState} from 'react';
import classes from './ButtonBasket.module.css'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import actionAddPhoneToBasket from "../../../store/actionCreators/actionAddPhoneToBasket"
import {useDispatch} from "react-redux"
import {Basket} from "../../pages/Basket";

export const ButtonBasket = ({phoneData}) => {

    const dispatch = useDispatch();
    const [stateBasket,
        setStateBasket] = useState("AddToBasket");

    const addToBasket = () => {
        setStateBasket('GoInBasket')
        dispatch(actionAddPhoneToBasket(phoneData))
    }

    // const goInBasket = () => {     return {         <Link to="/basket" />     } }

    return (
        <div className={classes.containerBasket}>
            {stateBasket === "AddToBasket"
                ? <Button
                    variant="success"
                    className={classes.buttonAddToBasket}
                    onClick={addToBasket}>
                    <AddShoppingCartIcon/>
                    </Button>
                    :
                    <Button variant="success" className={classes.buttonGoInBasket}>
                        <Link to="/basket" >
                            <CheckCircleIcon/>
                            <ShoppingCartIcon/>
                        </Link>
                    </Button>}
        </div>
    )
}