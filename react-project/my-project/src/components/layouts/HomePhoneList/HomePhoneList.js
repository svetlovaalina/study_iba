import React, { useEffect, useState } from 'react';
// import classes from './HomePhoneList.module.scss';
import { fetchPhones } from '../../../store/actions/fetchPhoneList';

import { PhoneCardList } from '../PhoneCardList';
import useFetch from 'use-http';
import { useDispatch, useSelector } from 'react-redux';
import { sortTypeSelector } from '../../../store/selectors/sortTypeSelector';
import { searchTextSelector } from '../../../store/selectors/searchTextSelector';
import { phoneListSelector } from '../../../store/selectors/phoneListSelector';
import { loadingSelector } from '../../../store/selectors/loading';
import { errorSelector } from '../../../store/selectors/error';

export const HomePhoneList = () => {
  const phoneListStore = useSelector(phoneListSelector);
  const sortTypeStore = useSelector(sortTypeSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const searchTextStore = useSelector(searchTextSelector);
  const [animationCall, setAnimationCall] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
    console.log(phoneListStore);
  }, []);

  useEffect(() => {
    setAnimationCall(prevState => !prevState);
  }, [searchTextStore, sortTypeStore]);

  const phoneListChanged = phoneListStore
    .sort((prevPhone, phone) => (prevPhone[sortTypeStore] < phone[sortTypeStore] ? -1 : 1))
    .filter(phoneListObj => phoneListObj.name.toLowerCase().includes(searchTextStore.toLowerCase()));

  return (
    <div>
      <PhoneCardList
        error={error}
        loading={loading}
        phoneListStore={phoneListStore}
        sortTypeStore={sortTypeStore}
        animationCall={animationCall}
        searchTextStore={searchTextStore}
        phoneListChanged={phoneListChanged}
      />
    </div>
  );
};
