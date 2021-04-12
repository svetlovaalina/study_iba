import React, { useState, useEffect } from 'react';
import classes from './ButtonShowMore.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { updateCurrentPage } from 'src/store/actionCreators/updateCurrentPage';
import { currentPageSelector } from '../../../store/selectors/currentPageSelector';

export const ButtonShowMore = () => {
  const currentPage = useSelector(currentPageSelector);
  const maxCountPage = 4;
  const dispatch = useDispatch();
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  const showMore = () => {
    if (currentPage <= maxCountPage) {
      setCurrentPageState(currentPageState + 1);
    }
  };

  useEffect(() => {
    dispatch(updateCurrentPage(currentPageState));
    console.log(currentPageState);
  }, [currentPageState]);

  return (
    <div className={classes.buttonShowMore}>
      <Button variant="secondary" onClick={showMore}>
        Show more
      </Button>
    </div>
  );
};
