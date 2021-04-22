import React, { useState, useEffect, useRef } from 'react';
import classes from './ButtonShare.module.scss';
import Button from 'react-bootstrap/Button';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export const ButtonShare = () => {
  const currentPhoneButton = useRef(null);
  let shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: window.location.href,
  };

  const handleShow = event => {
    if (window.navigator.share) {
      window.navigator
        .share(shareData)
        .then(() => console.log('All good!'))
        .catch(e => console.error(e));
    } else {
      setShow(true);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // Must be triggered some kind of "user activation"
  function copyCurrentPage() {
    var copyText = document.getElementById('myInput');
    copyText.select();
    document.execCommand('copy');
  }

  return (
    <div className={classes.containerBasket}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share link to current phone</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.modalBody}> Shared link</Modal.Body>
        <input type="text" value={window.location.href} id="myInput"></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={copyCurrentPage}>
            Copy
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="light" className={classes.buttonAddToBasket} ref={currentPhoneButton} onClick={handleShow}>
        {/* onClick={handleShow} */}
        Share
        <ShareIcon />
      </Button>
    </div>
  );
};
