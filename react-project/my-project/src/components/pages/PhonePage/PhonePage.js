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
                <div className={classes.PropDescription}>
                    <h3>Availability and Networks</h3>
                    <h4>Availability</h4>
                    <p>
                        {phoneData.availability}
                    </p>
                </div>

                <div className={classes.PropDescription}>
                    <h3>
                        Battery</h3>
                    <div>
                        <h4>Type</h4>
                        <p>
                            {phoneData.battery.standbyTime}
                        </p>
                        <h4>Talk Time</h4>
                        <p>
                            {phoneData.battery.talkTime}
                        </p>
                        <h4>Standby time (max)</h4>
                        <p>
                            {phoneData.battery.standbyTime}
                        </p>
                    </div>

                </div>
                <div className={classes.PropDescription}>
                    <h3>Storage and Memory</h3>
                    <h4>RAM</h4>
                    <p>
                        {phoneData.storage.ram}
                    </p>
                    <h4>Internal Storage</h4>
                    <p>
                        {phoneData.storage.flash}
                    </p>
                </div>
                <div className={classes.PropDescription}>
                    <h3>Connectivity</h3>
                    <h4>Network Support</h4>
                    <p>
                        {phoneData.connectivity.cell}
                    </p>
                    <h4>Bluetooth</h4>
                    <p>
                        {phoneData.connectivity.bluetooth}
                    </p>
                    <h4>WiFi</h4>
                    <p>
                        {phoneData.connectivity.wifi}
                    </p>
                    <h4>Infrared</h4>
                    <p>
                        {phoneData.connectivity.infrared
                            ? '✓'
                            : '✘'}
                    </p>
                    <h4>GPS</h4>
                    <p>
                        {phoneData.connectivity.gps
                            ? '✓'
                            : '✘'}
                    </p>
                </div>
                <div className={classes.PropDescription}>
                    <h3>Android</h3>
                    <h4>OS Version</h4>
                    <p>
                        {phoneData.android.os}
                    </p>
                    <h4>UI</h4>
                    <p>
                        {phoneData.storage.ui}
                    </p>
                </div>
                <div className={classes.PropDescription}>
                    <h3>Size and Weight</h3>
                    <h4>Weight</h4>
                    <p>
                        {phoneData.sizeAndWeight.weight}
                    </p>
                    <h4>Dimensions</h4>
                    <p>
                        {phoneData.sizeAndWeight.dimensions}
                    </p>

                </div>
                <div className={classes.PropDescription}>
                    <h3>Display</h3>
                    <h4>Screen size</h4>
                    <p>
                        {phoneData.display.screenSize}
                    </p>
                    <h4>Screen resolution</h4>
                    <p>
                        {phoneData.display.screenResolution}
                    </p>
                    <h4>Touch screen</h4>
                    <p>
                        {phoneData.display.touchScreen
                            ? '✓'
                            : '✘'}
                    </p>

                </div>
                <div className={classes.PropDescription}>
                    <h3>Hardware</h3>
                    <h4>CPU</h4>
                    <p>
                        {phoneData.hardware.cpu}
                    </p>
                    <h4>USB</h4>
                    <p>
                        {phoneData.hardware.usb}
                    </p>
                    <h4>Audio / headphonehardware jack</h4>
                    <p>
                        {phoneData.hardware.audioJack}
                    </p>
                    <h4>FM Radio</h4>
                    <p>
                        {phoneData.hardware.fmRadio
                            ? '✓'
                            : '✘'}
                    </p>
                    <h4>Accelerometer</h4>
                    <p>
                        {phoneData.hardware.accelerometer
                            ? '✓'
                            : '✘'}
                    </p>
                </div>
                <div className={classes.PropDescription}>
                    <h3>Camera</h3>
                    <h4>Primary</h4>
                    <p>
                        {phoneData.camera.primary}
                    </p>
                    <h4>Features</h4>
                    <p>
                        {phoneData.camera.features}
                    </p>

                </div>

                <div className={classes.PropDescription}>
                    <h3>
                        Additional Features</h3>
                    <p>
                        {phoneData.additionalFeatures}</p>
                </div>
            </div>
        </div>
    )
};

// {list.map(item => <PhoneCard     className={classes.phoneCard} key={item.id}
//    id={item.id}     name={item.name} imageUrl={item.imageUrl}
// snippet={item.snippet}/>)