import React, { useEffect, useState } from 'react';
// import classes from './HomePhoneList.module.scss';
import { fetchPhones } from '../../../store/thunk/getPhoneListThunk';

import { PhoneCardList } from '../PhoneCardList';
import useFetch from 'use-http';
import { useDispatch, useSelector } from 'react-redux';
// import { setPhoneList } from '../../../store/actionCreators/setPhoneList';
import { sortTypeSelector } from '../../../store/selectors/sortTypeSelector';
import { searchTextSelector } from '../../../store/selectors/searchTextSelector';
import { phoneListSelector } from '../../../store/selectors/phoneListSelector';

export const HomePhoneList = () => {
  const phoneListStore = useSelector(phoneListSelector);
  const sortTypeStore = useSelector(sortTypeSelector);
  const searchTextStore = useSelector(searchTextSelector);
  const [animationCall, setAnimationCall] = useState(false);
  const dispatch = useDispatch();

  const { get, response, loading, error } = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json', {
    cache: 'no-store',
  });

  useEffect(() => {
    dispatch(fetchPhones(phoneListStore, get, response));
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
