import { useState, useEffect, useCallback } from 'react';

export const useShowMore = ({ items = [], MAX_PHONE_NUMBER_ON_PAGE }) => {
  const [pagePagination, setPagePagination] = useState(0);
  const [rows, setRows] = useState(items.slice(0, MAX_PHONE_NUMBER_ON_PAGE));

  const showMore = useCallback(() => {
    setPagePagination((predValue) => predValue + 1);
  }, [pagePagination, setPagePagination]);

  useEffect(() => {
    setRows(() => items.slice(0, MAX_PHONE_NUMBER_ON_PAGE * pagePagination + MAX_PHONE_NUMBER_ON_PAGE));
  }, [items, pagePagination]);

  // const isShowMoreVisible = pagePagination + 1 < items.length / MAX_PHONE_NUMBER_ON_PAGE;
  const isShowMoreVisible = items.length > rows.length;
  return [rows, isShowMoreVisible, showMore];
};
