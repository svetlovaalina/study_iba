import React from 'react';
import classes from './ButtonShowMore.module.css';
import Button from 'react-bootstrap/Button';

export const ButtonShowMore = ({ showMore }) => {
  return (
    <div className={classes.buttonShowMore}>
      <Button variant="secondary" onClick={showMore}>
        Show more
      </Button>
    </div>
  );
};
