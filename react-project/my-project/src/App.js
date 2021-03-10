import React, {useState} from 'react';
import classes from './App.module.css';
import {PhonePage} from './components/pages/PhonePage';
import {Home} from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/layouts/NavBar";
import {Basket} from './components/pages/Basket';

function App() {

    return (
        <div className={classes.App}>

            <Router >
                <NavBar/>
                <Switch>
                    <Route path="/phonePage/:id"><PhonePage/>
                    </Route>
                    <Route path="/basket"><Basket/>
                    </Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
