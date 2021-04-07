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
          <Modal.Title id="example-modal-sizes-title-sm" className={classes.modalTitle}>
          {modalType === 'Success' &&
            <CheckCircleOutlineIcon className={classes.iconSuccessMessage} /> }
          {modalType === 'Error' && 
          <HighlightOffIcon  className={classes.iconErrorMessage} /> }
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
