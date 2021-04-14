import React from 'react';
// import classes from './ButtonMakeOrder.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

export const ButtonMakeOrder = () => {
  return (
    <div>
      <Link to="/form-order">
        <Button variant="success">
          <DoneOutlineIcon />
          Make order
        </Button>
      </Link>
    </div>
  );
};
