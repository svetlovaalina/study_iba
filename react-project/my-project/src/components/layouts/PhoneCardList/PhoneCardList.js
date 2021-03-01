import React, {useEffect, useState} from 'react';
import classes from './PhoneCardList.module.css'
import {PhoneCard} from '../PhoneCard';

export const PhoneCardList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')
      .then(response => response.json())
      .then(result => {
        setList(result)
        console.log(result)
      })
  }, [])

  return (
    <div className={classes.container}>
      {
        list.map(item =>
          <PhoneCard className={classes.phoneCard} key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} snippet={item.snippet}/>)
      }
    </div>)
};



