import React from 'react';
// import classes from './App.module.css';
import { PhonePage } from './components/pages/PhonePage';
import { Home } from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/layouts/NavBar';
import { Basket } from './components/pages/Basket';
import { FormOrder } from './components/pages/FormOrder';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/phonePage/:id">
            <PhonePage />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/form-order">
            <FormOrder />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
