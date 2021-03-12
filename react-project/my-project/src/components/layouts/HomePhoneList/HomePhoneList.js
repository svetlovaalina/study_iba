import React, {useContext, useEffect, useCallback, useState} from 'react';
import classes from './HomePhoneList.module.css'
import {PhoneCardList} from '../PhoneCardList';
import useFetch, {Provider} from 'use-http'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {useDispatch, useSelector} from "react-redux";
import {getPhoneList} from '../../../store/actionCreators/getPhoneList'

export const HomePhoneList = () => {

    const phoneListStore = useSelector(state => state.phoneListStore)
    const sortTypeStore = useSelector(state => state.sortTypeStore)
    const searchTextStore = useSelector(state => state.searchTextStore)

    const dispatch = useDispatch();

    const {get, response, loading, error} = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')

    useEffect(() => {
        getPhones()
    }, [])

    const getPhones = async() => {
        const phones = await get('')
        if (response.ok) {
            dispatch(getPhoneList(phones))
        }
    }

    return (
        <div>
            <PhoneCardList
                error={error}
                loading={loading}
                phoneListStore={phoneListStore}
                sortTypeStore={sortTypeStore}
                searchTextStore={searchTextStore}/>
        </div>
    )
}
