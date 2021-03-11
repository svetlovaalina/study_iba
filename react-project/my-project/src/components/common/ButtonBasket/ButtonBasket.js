import React, {useState, useEffect} from 'react';
import classes from './ButtonBasket.module.css'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {actionAddPhoneToBasket} from "../../../store/actionCreators/actionAddPhoneToBasket"
import {useDispatch} from "react-redux"
import {Basket} from "../../pages/Basket";

export const ButtonBasket = ({phoneData}) => {
    const add = "AddToBasket";
    const go = "GoInBasket";
    const dispatch = useDispatch();
    const [stateBasket,
        setStateBasket] = useState(add);

    const localStorageBasket = JSON.parse(localStorage.getItem('phoneListBasket'));

    const addToBasket = () => {
        setStateBasket(go)
        dispatch(actionAddPhoneToBasket(phoneData))
        // const  arrLocalStorageBasket = [];

        if (!localStorageBasket) {
            localStorage.setItem("phoneListBasket", JSON.stringify([phoneData]))
        } else {
            localStorageBasket.push((phoneData))
            localStorage.setItem("phoneListBasket", JSON.stringify(localStorageBasket))
        }

    }
    useEffect(() => {
        if (localStorageBasket && localStorageBasket.find(x => x.id === phoneData.id)) {
            setStateBasket(go)
        }
    }, [])

    return (
        <div className={classes.containerBasket}>
            {stateBasket === add
                ? <Button
                        variant="success"
                        className={classes.buttonAddToBasket}
                        onClick={addToBasket}>
                        Add to
                        <AddShoppingCartIcon/>
                    </Button>
                : <Button variant="success" className={classes.buttonGoInBasket}>
                    <Link to="/basket">
                        Go to
                        <ShoppingCartIcon/><CheckCircleIcon/>
                    </Link>
                </Button>}
        </div>
    )
}