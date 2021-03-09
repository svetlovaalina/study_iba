import React, {useState, useContext, useEffect} from 'react';
import classes from './Search.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../App";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";

export const Search = () => {

    const {phoneList, setPhoneList, searchText, setSearchText} = useContext(Context);

    const onInputChange = (event) => {
        setSearchText(event.currentTarget.value)
    }

    return (
        <div className={classes.searchForm}>

            <Form inline>
            <InputLabel className={classes.labelSearchBy}>Search:</InputLabel> 
                    
                {/* <p>Search:
                </p> */}
                <input
                    type='text'
                    className='form-control'
                    value={searchText}
                    onChange={onInputChange}/>
            </Form>

        </div>

    )

}