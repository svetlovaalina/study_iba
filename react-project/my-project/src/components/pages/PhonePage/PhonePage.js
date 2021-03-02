import React from 'react';
import classes from './PhonePage.module.css'
import {useParams} from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'


export const PhonePage = () => {
    const {id} = useParams()
    const {isLoading, error, data: phoneData} = useFetch(`http://angular.github.io/angular-phonecat/step-14/app/phones/${id}.json`);

    if (isLoading) 
        return (<Spinner animation="border" className='spinner'/>);
    if (error) {
        return (
            <Alert variant='danger'>"Error : {error.message}   {error.status}"
            </Alert>
        );
    }
    
    return (
        <div className={classes.phoneImages}>
            <h1>
                id: {id}
            </h1>
            <div className={classes.imageContainer}>

                {phoneData.images && (
                    <Carousel showArrows={true}>
                        {phoneData
                            .images
                            .map((item, i) => (
                                <div key={i} className={classes.photoCarousel}>
                                    <img
                                        alt="Phone image"
                                        src={`http://angular.github.io/angular-phonecat/step-14/app/${item}`}/>

                                </div>
                            ))}
                    </Carousel>
                )}
            </div>
        </div>

    )
};
