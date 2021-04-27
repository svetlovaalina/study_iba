import React, { useEffect, useState } from 'react';
import classes from './Random.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from 'use-http';
import { PhoneCard } from '../../layouts/PhoneCard';
import Alert from 'react-bootstrap/Alert';

import Spinner from 'react-bootstrap/Spinner';
import { setPhoneList } from '../../../store/actionCreators/setPhoneList';
import { phoneListSelector } from '../../../store/selectors/phoneListSelector';

export const Random = () => {
  const phoneListStore = useSelector(phoneListSelector);
  const [localStorageRandom, setLocalStorageRandom] = useState(JSON.parse(localStorage.getItem('randomPhone')));
  const dispatch = useDispatch();
  const [today, setToday] = useState(new Date().toLocaleDateString());
  // const [today, setToday] = useState('5.05.2021');

  const { get, response, loading, error } = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json', {
    cache: 'no-store',
  });
  const [phoneToday, setPhoneToday] = useState(null);

  const getPhones = async () => {
    if (!phoneListStore.length) {
      const phones = await get('');
      if (response.ok) {
        dispatch(setPhoneList(phones));
      }
    }
  };
  const getRandomPhone = () => {
    if (!phoneListStore.length) {
      getPhones();
      return;
    }
    if (
      (phoneListStore.length && !localStorageRandom) ||
      (phoneListStore.length && localStorageRandom && localStorageRandom.date !== today)
    ) {
      console.log(`Now I'm generating Today's phone`);
      const randomId = phoneListStore[Math.floor(Math.random() * phoneListStore.length)].id;
      setLocalStorageRandom({ id: randomId, date: today });

      localStorage.setItem('randomPhone', JSON.stringify({ id: randomId, date: today }));
      setPhoneToday(phoneListStore.find(phone => phone.id === randomId));
      return;
    }
    if (phoneListStore.length && localStorageRandom && localStorageRandom.date === today) {
      console.log('This is up-to-date information');
      setPhoneToday(phoneListStore.find(phone => phone.id === localStorageRandom.id));
    }
  };
  //Number
  useEffect(() => {
    getRandomPhone();
    console.log(today);
  }, [phoneListStore]);

  return (
    <div className={classes.container}>
      <h2> Today's phone : </h2>
      <div className={classes.phoneCard}>
        {phoneToday ? (
          <div className={classes.phoneCardBasket}>
            <PhoneCard id={phoneToday.id} name={phoneToday.name} imageUrl={phoneToday.imageUrl} snippet={phoneToday.snippet} />
          </div>
        ) : (
          <Spinner animation="border" className="spinner" />
        )}
      </div>
    </div>
  );
};
