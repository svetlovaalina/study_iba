import React, {useContext, useEffect, useCallback, useState} from 'react';
import classes from './HomePhoneList.module.css'
import {PhoneCardList} from '../PhoneCardList';
import useFetch, {Provider} from 'use-http'
import {useDispatch, useSelector} from "react-redux";
import {getPhoneList} from '../../../store/actionCreators/getPhoneList';

export const HomePhoneList = () => {

    const phoneListStore = useSelector(state => state.phoneListStore)
    const sortTypeStore = useSelector(state => state.sortTypeStore)
    const searchTextStore = useSelector(state => state.searchTextStore)
    const [inProp,setInProp] = useState(false);

    const dispatch = useDispatch();

    const {get, response, loading, error} = useFetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json', {cache: "no-store"})

    useEffect(() => {
        getPhones()
    }, [])

    useEffect(() => {
        setInProp(!inProp)
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
                inProp={inProp}
                searchTextStore={searchTextStore}/>
        </div>
    )
}
