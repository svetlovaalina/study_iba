import React, { useEffect } from 'react';
import classes from './StoreDescription.module.scss';
import { Loader } from '@googlemaps/js-api-loader';
import { Footer } from 'src/components/layouts/Footer';

export const StoreDescription = () => {
  // const google = window.google;
  let map;

  // useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: 'AIzaSyD-QduMYFDrC4K0zSnDqy5jn2ldr-Pt0qQ',
  //     version: 'weekly',
  //     // ...additionalOptions,
  //   });
  //   loader.load().then(() => {
  //     map = new window.google.maps.Map(document.getElementById('map'), {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8,
  //     });
  //   });
  // }, []);

  return (
    <div className={classes.container}>
      <div сlassName={classes.descriptionAndMap}>
        {/* <h1> Contacts </h1> */}
        <h2> Our location: </h2>
        <p> Материк ул. Притыцкого 101, Минск </p>

        {/* <div id="map" className={classes.mapContainer}></div> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.466472130115!2d27.43105991542034!3d53.90568628010004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdb290a4f3cef%3A0x329f1c7878957ec!2z0JzQsNGC0LXRgNC40Lo!5e0!3m2!1sru!2sby!4v1619041815261!5m2!1sru!2sby"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};
//
