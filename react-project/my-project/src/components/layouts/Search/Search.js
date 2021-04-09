import React from 'react';
import classes from './Search.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputLabel from "@material-ui/core/InputLabel";
import {useSelector, useDispatch} from "react-redux";
import {updateSearchText} from "../../../store/actionCreators/updateSearchText"
import {searchTextSelector} from '../../../store/selectors/searchTextSelector'


export const Search = () => {
    const dispatch = useDispatch();
    const searchTextStore = useSelector(searchTextSelector)
    const onInputChange = (event) => {
        dispatch(updateSearchText(event.currentTarget.value))
    }

    return (
        <div className={classes.searchForm}>
            <Form >
                <InputLabel className={classes.labelSearchBy}>Search:</InputLabel>
                <input
                    type='text'
                    className='form-control'
                    value={searchTextStore}
                    onChange={onInputChange}/>
            </Form>
        </div>
    )
}