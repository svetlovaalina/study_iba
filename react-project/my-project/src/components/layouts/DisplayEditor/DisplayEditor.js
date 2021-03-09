import React, {useState, useContext, useEffect} from 'react';
import classes from './DisplayEditor.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../App";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Search} from "../Search"
import {Sort} from "../Sort"

export const DisplayEditor = () => {
return( 
    <div>
    <Search />
    <Sort/>
    </div>
)
}

