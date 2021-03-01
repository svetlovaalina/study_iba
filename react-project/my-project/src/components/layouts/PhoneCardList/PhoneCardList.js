import React  from 'react';
import classes from './PhoneCardList.module.css'
import {PhoneCard} from '../PhoneCard';
import useFetch from "react-fetch-hook";

export const PhoneCardList = () => {
  // const [list, setList] = useState([]);
const {isLoading, error, data:list} = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')
if (isLoading) return "Loading!";
if (error) return "Error loading data!";


  return (
    <div className={classes.container}>
      {
        list.map(item =>
          <PhoneCard className={classes.phoneCard} key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} snippet={item.snippet}/>)
      }
    </div>)
};



