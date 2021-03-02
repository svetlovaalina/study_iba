import React from 'react';
import classes from './RouterPage.module.css'
import {PhonePage} from '../PhonePage';
import {Home} from '../Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export const RouterPage = () => {
  return (
  <Router >
         <a href='/'> Main page</a>
      <Switch>
      <Route  path = "/phonePage/:id">
        <PhonePage />
      </Route>
      <Route  path = "/">
        <Home/>
      </Route>

      </Switch>

  </Router>
  );
};
