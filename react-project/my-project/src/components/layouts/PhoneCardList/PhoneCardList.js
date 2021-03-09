import React, {useContext, useEffect, useCallback, useState} from 'react';
import classes from './PhoneCardList.module.css'
import {PhoneCard} from '../PhoneCard';
// import useFetch from "react-fetch-hook";
import useFetch, {Provider} from 'use-http'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {Context} from "../../../App";


export const PhoneCardList = () => {
    const {
        phoneList,
        setPhoneList,
        searchText,
        setSearchText,
        sortType,
        setSortType
    } = useContext(Context);

    const {get, response, loading, error} = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')
    useEffect(() => {
        getPhones()
    }, [])

    const getPhones = async() => {
        const phones = await get('')
        if (response.ok) {
            setPhoneList(phones)
        }
    }
   
    return (
        <div className={classes.container}>
            {error && <Alert variant='danger' className={classes.alert}>
                Error: {error.name}
                {error.message}
            </Alert>}
            {loading && <Spinner animation="border" className='spinner'/>}
            {phoneList
                .sort((prevPhone, phone) => prevPhone[sortType] < phone[sortType] ? -1 : 1)
                .filter(phoneListObj => phoneListObj.name.toLowerCase().includes(searchText.toLowerCase()))
                .map(item => <PhoneCard
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
