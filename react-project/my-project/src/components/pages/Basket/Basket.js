import React, {useEffect, useState} from 'react';
import classes from './Basket.module.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {PhoneCard} from '../../layouts/PhoneCard';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal'

export const Basket = () => {
    const [show,
        setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [localStorageBasket,
        setLocalStorageBasket] = useState(JSON.parse(localStorage.getItem('phoneListBasket')))

    const deleteButton = (event) => {
        const idPhone = event
            .currentTarget
            .getAttribute('idPhone');
        setLocalStorageBasket(localStorageBasket.filter((el) => el.id !== idPhone))

    }

    useEffect(() => {
        localStorage.setItem("phoneListBasket", JSON.stringify(localStorageBasket))
    }, [localStorageBasket])

    return (
        <div className={classes.container}>

            {localStorageBasket && localStorageBasket.length
                ? localStorageBasket.map(item => <div className={classes.phoneCardBasket}>
                    <PhoneCard
                        className={classes.localStorageBasket}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.images[0]}
                        snippet={item.description}/>
                    <Button variant="danger" idPhone={item.id} onClick={handleShow}>
                        <DeleteIcon/>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Remove phone</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this phone from the basket?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" idPhone={item.id} onClick={deleteButton}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>)
                : <Alert variant='danger' className={classes.alert}>
                    Oops! Your cart is empty!
                </Alert>
}
        </div>
    )
};