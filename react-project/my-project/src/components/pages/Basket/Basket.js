import React, {useEffect, useState, useRef} from 'react';
import classes from './Basket.module.css';
import {PhoneCard} from '../../layouts/PhoneCard';
import {ButtonMakeOrder} from '../../common/ButtonMakeOrder';
import {Counter} from '../../common/Counter'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal'

export const Basket = () => {
    const [show,
        setShow] = useState(false);
    const [phoneToDelete,
        setPhoneToDelete] = useState('');
    const handleClose = () => setShow(false);
    const deletePhoneButton = useRef(null)

    const handleShow = (event) => {
        setShow(true)
        setPhoneToDelete(event.currentTarget.dataset.idphone)
    };

    const [localStorageBasket,
        setLocalStorageBasket] = useState(JSON.parse(localStorage.getItem('phoneListBasket')))

    const deleteButton = (event) => {
        setLocalStorageBasket(localStorageBasket.filter((el) => el.id !== phoneToDelete))
        setPhoneToDelete('')
        setShow(false);

    }

    useEffect(() => {
        localStorage.setItem("phoneListBasket", JSON.stringify(localStorageBasket))
    }, [localStorageBasket])

    return (
        <div className={classes.container}>
            <div className={classes.buttonMakeOrder}>
            {!!(localStorageBasket?.length) && <ButtonMakeOrder/> }
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Remove phone</Modal.Title>
                </Modal.Header>
                <Modal.Body> Are you sure you want to delete this phone from the basket?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger"  onClick={deleteButton}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            
            {localStorageBasket?.length
                ? 
                localStorageBasket.map(item => 
                <div className={classes.phoneCardBasket} key={item.id}>
                    <PhoneCard
                        className={classes.localStorageBasket}
                        id={item.id}                    
                        name={item.name}
                        imageUrl={item.images[0]}
                        snippet={item.description}/>
                    <div className={classes.counterAndDelete}>
                        
                        <Button variant="danger" data-idphone={item.id} ref={deletePhoneButton} onClick={handleShow} className={classes.deleteButton}>
                            <HighlightOffIcon/>
                        </Button>
                        <Counter idphone={item.id} localStorageBasket={localStorageBasket}
                        setLocalStorageBasket={setLocalStorageBasket}/>
                </div>
                </div>)
                
                : <Alert variant='danger' className={classes.alert}>
                    Oops! Your cart is empty!
                </Alert>
}
           
        </div>
    )
};