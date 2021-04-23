import React, { useEffect } from 'react';
import classes from './AboutUs.module.scss';
import { Loader } from '@googlemaps/js-api-loader';
import { Footer } from 'src/components/layouts/Footer';

export const AboutUs = () => {
  let map;

  return (
    <div className={classes.container}>
      <div сlassName={classes.descriptionAndMap}>
        <h2> Our location: </h2>
        <p> Материк ул. Притыцкого 101, Минск </p>

        {/* <div id="map" className={classes.mapContainer}></div> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.466472130115!2d27.43105991542034!3d53.90568628010004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdb290a4f3cef%3A0x329f1c7878957ec!2z0JzQsNGC0LXRgNC40Lo!5e0!3m2!1sru!2sby!4v1619041815261!5m2!1sru!2sby"
          width="800"
          height="550"
          style={{ border: 0 }}
          allowfullscreen=""
          // loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};
//
