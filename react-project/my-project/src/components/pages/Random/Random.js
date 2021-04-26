import React, { useEffect, useState } from 'react';
import classes from './Random.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneCard } from 'src/components/layouts/PhoneCard';
import Alert from 'react-bootstrap/Alert';
import { phoneListSelector } from 'src/store/selectors/phoneListSelector';
// import { randomPhoneSelector } from 'src/store/selectors/randomPhoneSelector';

export const Random = () => {
  const phoneListStore = useSelector(phoneListSelector);
  // const randomPhone = useSelector(randomPhoneSelector);
  const dispatch = useDispatch();
  let todayDate = new Date();
  const [today, setToday] = useState(todayDate.toLocaleDateString());
  // const [today, setToday] = useState('03.05.2021');

  useEffect(() => {
    getRandomPhone();
    console.log(today);
  }, [phoneListStore]);

  const [localStorageRandom, setLocalStorageRandom] = useState(JSON.parse(localStorage.getItem('randomPhone')));

  const getRandomPhone = () => {
    if (
      (phoneListStore.length && !localStorageRandom) ||
      (phoneListStore.length && localStorageRandom && localStorageRandom.date !== today)
    ) {
      console.log(`Now I'm generating Today's phone`);
      const random = phoneListStore[Math.floor(Math.random() * phoneListStore.length)];
      setLocalStorageRandom(random);
      localStorage.setItem('randomPhone', JSON.stringify({ ...random, date: today }));
    }
    if (phoneListStore.length && localStorageRandom && localStorageRandom.date === today) {
      console.log('This is up-to-date information');
    }
  };

  return (
    <div className={classes.container}>
      <h2> Today's phone : </h2>
      <div className={classes.phoneCard}>
        {localStorageRandom ? (
          <div className={classes.phoneCardBasket}>
            <PhoneCard
              id={localStorageRandom.id}
              name={localStorageRandom.name}
              imageUrl={localStorageRandom.imageUrl}
              snippet={localStorageRandom.snippet}
            />
          </div>
        ) : (
          <Alert variant="danger" className={classes.alert}>
            Oops!
          </Alert>
        )}
      </div>
    </div>
  );
};
