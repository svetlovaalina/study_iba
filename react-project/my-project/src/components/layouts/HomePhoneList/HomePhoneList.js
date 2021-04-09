import React, { useEffect, useState} from 'react';
import classes from './HomePhoneList.module.css'
import {PhoneCardList} from '../PhoneCardList';
import useFetch from 'use-http'
import {useDispatch, useSelector} from "react-redux";
import {getPhoneList} from '../../../store/actionCreators/getPhoneList';
import {sortTypeSelector} from '../../../store/selectors/sortTypeSelector'
import {searchTextSelector} from '../../../store/selectors/searchTextSelector'
import {phoneListSelector} from '../../../store/selectors/phoneListSelector'


export const HomePhoneList = () => {

    const phoneListStore = useSelector(phoneListSelector)
    const sortTypeStore = useSelector(sortTypeSelector)
    const searchTextStore = useSelector(searchTextSelector)
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
