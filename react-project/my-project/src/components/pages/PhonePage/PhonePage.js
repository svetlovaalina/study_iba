import React from 'react';
import classes from './PhonePage.module.css'
import {useParams} from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const PhonePage = () => {
  const {id} = useParams()
  const {
    isLoading,
    error,
    data: phoneData
  } = useFetch(`http://angular.github.io/angular-phonecat/step-14/app/phones/${id}.json`);


  if (isLoading) return 'Loading!';
  if (error) return 'Error loading data!';

  return (
    <div className={classes.phoneImages}>
      <h1> id: {id} </h1>
      <div className={classes.imageContainer}>

        {phoneData.images && (
          <Carousel showArrows={true}>

            {phoneData.images.map((item, i) => (
                <div key={i}>
                  <img alt="Phone image"
                       src={`http://angular.github.io/angular-phonecat/step-14/app/${item}`}/>
                  <p className="legend">Legend 1</p>
                </div>
              )
            )}
          </Carousel>
        )}
      </div>
    </div>

  )
};

