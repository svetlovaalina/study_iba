import React, {useContext, useEffect, useCallback, useState} from 'react';
import classes from './PhoneCardList.module.css'
import {PhoneCard} from '../PhoneCard';
// import useFetch from "react-fetch-hook";
import useFetch, {Provider} from 'use-http'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {Context} from "../../../App";

export const PhoneCardList = () => {
    const {phoneList, setPhoneList, searchText, setSearchText} = useContext(Context);
    // const [list,setList] = useState([]); let {isLoading, error, data: list} =
    // useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones
    // . json') if (isLoading)     return (<Spinner animation="border"
    // className='spinner'/>); if (error) {     return (         <Alert
    // variant='danger'>"Error : {error.message}             {error.status}"
    // </Alert>     ); }

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
