import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './Counter.module.css';

export const Counter = ({ idphone, localStorageBasket, setLocalStorageBasket }) => {
  const [counter, setCounter] = useState(localStorageBasket.find((item) => item.id === idphone).amount || 1);

  const handleIncrement = () => {
    setCounter(counter + 1);
    setLocalStorageBasket(
      localStorageBasket.map(function (element) {
        if (element.id === idphone) {
          element.amount = counter + 1;
        }
        return element;
      })
    );
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setLocalStorageBasket(
        localStorageBasket.map(function (element) {
          if (element.id === idphone) {
            element.amount = counter - 1;
          }
          return element;
        })
      );
    }
  };

  return (
    <div className={classes.counter}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleDecrement}>-</Button>
        <Button disabled>{counter}</Button>
        <Button onClick={handleIncrement}>+</Button>
      </ButtonGroup>
    </div>
  );
};
