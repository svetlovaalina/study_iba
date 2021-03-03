import React from 'react';
import classes from './PhonePage.module.css'
import {useParams} from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

export const PhonePage = () => {
    const {id} = useParams()
    const {isLoading, error, data: phoneData} = useFetch(`http://angular.github.io/angular-phonecat/step-14/app/phones/${id}.json`);

    if (isLoading) 
        return (<Spinner animation="border" className='spinner'/>);
    if (error) {
        return (
            <Alert variant='danger'>"Error : {error.message}
                {error.status}"
            </Alert>
        );
    }
 

    return (
        <div className={classes.containerPhone}>
            <div className={classes.phoneImagesShortDescription}>

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
                <div className={classes.IdAndDescription}>
                    <h1>
                        {phoneData.name}
                    </h1>
                    <div className={classes.CardDescription}>
                        <Card>
                            <p>
                                {phoneData.description}
                            </p>
                        </Card>
                    </div>
                </div>
                
            </div>
            <div className={classes.detailsDescription}>
                <div className={classes.ProrDescription}>
                    <h3> Additional Features</h3>
                    <p> {phoneData.additionalFeatures}</p>
                </div>

                <div className={classes.ProrDescription}>
                    <h3> Battery</h3>
                    <div>
                        <h4>Type</h4>
                        <p>
                            {phoneData.battery.standbyTime}
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

// {list.map(item => <PhoneCard
//     className={classes.phoneCard}
//     key={item.id}
//     id={item.id}
//     name={item.name}
//     imageUrl={item.imageUrl}
//     snippet={item.snippet}/>)