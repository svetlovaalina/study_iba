import React, {useContext, useEffect} from 'react';
import classes from './PhoneCardList.module.css'
import {PhoneCard} from '../PhoneCard';
import useFetch from "react-fetch-hook";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {Context} from "../../../App";

export const PhoneCardList = () => {
    const {phoneList, setPhoneList} = useContext(Context);

    let {isLoading, error, data: list} = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')

    if (isLoading) 
        return (<Spinner animation="border" className='spinner'/>);
    if (error) {
        return (
            <Alert variant='danger'>"Error : {error.message}
                {error.status}"
            </Alert>
        );
    }
    if (isLoading === false) {
        setPhoneList(list)
    }

    return (
        <div className={classes.container}>

            {phoneList.map(item => <PhoneCard
                className={classes.phoneCard}
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                snippet={item.snippet}/>)
}
        </div>
    )
};
