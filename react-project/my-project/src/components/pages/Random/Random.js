import React, { useEffect, useState } from 'react';
import classes from './Random.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from 'use-http';
import { PhoneCard } from '../../layouts/PhoneCard';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { phoneListSelector } from '../../../store/selectors/phoneListSelector';
// import { fetchPhones } from '../../../store/thunk/getPhoneListThunk';
import { fetchPhones } from '../../../store/actions/fetchPhoneList';
import { errorSelector } from '../../../store/selectors/error';
import { loadingSelector } from '../../../store/selectors/loading';

export const Random = () => {
  const [localStorageRandom, setLocalStorageRandom] = useState(JSON.parse(localStorage.getItem('randomPhone')));

  const [phoneToday, setPhoneToday] = useState(null);
  const [today, setToday] = useState(new Date().toLocaleDateString());
  const error = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  // const [today, setToday] = useState('5.05.2021');

  const dispatch = useDispatch();
  // const { get, response, loading, error } = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json', {
  //   cache: 'no-store',
  // });
  const phoneListStore = useSelector(phoneListSelector);

  const getRandomPhone = () => {
    if (!phoneListStore.length) {
      dispatch(fetchPhones());

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

  useEffect(() => {
    getRandomPhone();
  }, [phoneListStore]);

  return (
    <div className={classes.container}>
      <h2> Today's phone : </h2>
      <div className={classes.phoneCard}>
        {phoneToday && (
          <div className={classes.phoneCardBasket}>
            <PhoneCard id={phoneToday.id} name={phoneToday.name} imageUrl={phoneToday.imageUrl} snippet={phoneToday.snippet} />
          </div>
        )}
        {error && (
          <Alert variant="danger" className={classes.alert}>
            Error: {error.name}
            {error.message}
          </Alert>
        )}
        {loading && <Spinner animation="border" className="spinner" />}
      </div>
    </div>
  );
};
