import { useState, useEffect, useCallback } from 'react';

export const useShowMore = ({ items = [], limit }) => {
  const [currentPageState, setCurrentPageState] = useState(0);
  const [rows, setRows] = useState(items.slice(0, limit));

  const showMore = useCallback(() => {
    setCurrentPageState((predValue) => predValue + 1);
  }, [currentPageState, setCurrentPageState]);

  useEffect(() => {
    setRows(() => items.slice(0, limit * currentPageState + limit));
  }, [items, currentPageState]);

  const isShowMoreVisible = currentPageState + 1 < items.length / limit;

  return [rows, isShowMoreVisible, showMore];
};
