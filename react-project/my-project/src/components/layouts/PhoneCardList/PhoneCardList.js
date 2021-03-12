import React, {useContext, useEffect, useCallback, useState} from 'react';
import classes from './PhoneCardList.module.css'
import {PhoneCard} from '../PhoneCard';
import useFetch, {Provider} from 'use-http'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {useDispatch, useSelector} from "react-redux";
import {getPhoneList} from '../../../store/actionCreators/getPhoneList'
import cn from 'classnames'

export const PhoneCardList = ({error, loading, phoneListStore, sortTypeStore, searchTextStore}) => {

    return (
        <div className={classes.container}>
            {error && <Alert variant='danger' className={classes.alert}>
                Error: {error.name}
                {error.message}
            </Alert>}
            {loading && <Spinner animation="border" className='spinner'/>}
            {phoneListStore.sort((prevPhone, phone) => prevPhone[sortTypeStore] < phone[sortTypeStore]
                ? -1
                    : 1)
                .filter(phoneListObj => phoneListObj.name.toLowerCase().includes(searchTextStore.toLowerCase()))
                .map(item => <PhoneCard
                    className={classes.containerPhoneCard}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    snippet={item.snippet}/>)
}
        </div>
    )
};
