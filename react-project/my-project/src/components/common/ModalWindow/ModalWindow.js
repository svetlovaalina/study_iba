import React from 'react';
import Modal from 'react-bootstrap/Modal'
import classes from './Modal.module.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const ModalWindow = ({modalType, showState, setHideState,
  modalTitle, orderName, orderId, errorType}) => {
  return (
    <Modal
      className={classes.modalWindow} size="sm" show={showState} 
      onHide={() => setHideState(false)} aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          {modalType === 'Success' &&
            <CheckCircleOutlineIcon style={{ color: 'green', marginRight:'0.5rem' }}/> }
          {modalType === 'Error' && 
          <HighlightOffIcon style={{color: 'red', marginRight:'0.5rem'}}/> }
           {modalTitle}
          </Modal.Title>
        </Modal.Header>
      {modalType === 'Success' &&
        <Modal.Body>
          <b> {orderName} </b>, your order with number 
          <b> {orderId} </b>, was successfully sent
        </Modal.Body> }
      {modalType === 'Error' && (
        <Modal.Body>
         Error message : {errorType}
        </Modal.Body> )
      }
    </Modal>
)
  };
