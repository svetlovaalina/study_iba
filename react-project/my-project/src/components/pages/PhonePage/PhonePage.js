import React from 'react';
import classes from './PhonePage.module.css'
import {useParams} from "react-router-dom";
import useFetch from "react-fetch-hook";

export const PhonePage = () => {
    const {id} = useParams()
    const {isLoading, error, data: phoneData} = useFetch(`http://angular.github.io/angular-phonecat/step-14/app/phones/${id}.json`)
        if (isLoading) return "Loading!";
        if (error) return "Error loading data!";
 
    return (
      <div className={classes.container}>
          <h1> id:  {id} </h1>
          
      </div>)
  };
  
  