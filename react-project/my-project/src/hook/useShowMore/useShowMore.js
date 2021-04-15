import { useState, useEffect, useCallback } from 'react';

export const useShowMore = ({ items = [], maxPhoneNumberOnPage }) => {
  const [pagePagination, setPagePagination] = useState(0);
  const [rows, setRows] = useState(items.slice(0, maxPhoneNumberOnPage));

  const showMore = useCallback(() => {
    setPagePagination((predValue) => predValue + 1);
  }, [pagePagination, setPagePagination]);

  useEffect(() => {
    setRows(() => items.slice(0, maxPhoneNumberOnPage * pagePagination + maxPhoneNumberOnPage));
  }, [items, pagePagination]);

  const isShowMoreVisible = pagePagination + 1 < items.length / maxPhoneNumberOnPage;

  return [rows, isShowMoreVisible, showMore];
};
