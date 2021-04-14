import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from 'src/store/actionCreators/updateCurrentPage';
import { currentPageSelector } from '../../store/selectors/currentPageSelector';

export const useShowMore = (items = [], limit, maxCountPage) => {
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useDispatch();
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [rows, setRows] = useState(items.slice(0, limit));

  useEffect(() => {
    setRows(() => items.slice(0, limit));
  }, [maxCountPage, items]);

  const showMore = () => {
    // debugger;
    if (currentPage <= maxCountPage) {
      setCurrentPageState(currentPage + 1);

      //   setCurrentPageState((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    dispatch(updateCurrentPage(currentPageState));
    setRows(() => items.slice(0, currentPageState * limit + limit));
  }, [currentPageState]);

  const isShowMoreVisible = currentPage + 1 < items.length / limit;

  return [rows, isShowMoreVisible, showMore];
};
