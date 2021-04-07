import React, { useEffect, useState} from 'react';
import classes from './HomePhoneList.module.css'
import {PhoneCardList} from '../PhoneCardList';
import useFetch from 'use-http'
import {useDispatch, useSelector} from "react-redux";
import {getPhoneList} from '../../../store/actionCreators/getPhoneList';

export const HomePhoneList = () => {

    const phoneListStore = useSelector(state => state.phoneListStore)
    const sortTypeStore = useSelector(state => state.sortTypeStore)
    const searchTextStore = useSelector(state => state.searchTextStore)
    const [animationCall,setAnimationCall] = useState(false);

    const dispatch = useDispatch();

    const {get, response, loading, error} = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json', {cache: "no-store"})

    useEffect(() => {
        getPhones()
    }, [])

    useEffect(() => {
        setAnimationCall(!animationCall)
    }, [searchTextStore, sortTypeStore])

    const getPhones = async() => {
        if (!phoneListStore.length) {
            const phones = await get('')
            if (response.ok) {
                dispatch(getPhoneList(phones))
            }
        }
    }

    return (
        <div>
            <PhoneCardList
                error={error}
                loading={loading}
                phoneListStore={phoneListStore}
                sortTypeStore={sortTypeStore}
                animationCall={animationCall}
                searchTextStore={searchTextStore}/>
        </div>
    )
}
