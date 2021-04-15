import React, { lazy, Suspense } from 'react';
// import classes from './App.module.css';
// import { PhonePage } from 'src/components/pages/PhonePage';
import { Home } from 'src/components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/layouts/NavBar';
// import { FormOrder } from './components/pages/FormOrder';

const Basket = lazy(() => import('./components/pages/Basket/Basket'));
const FormOrder = lazy(() => import('./components/pages/FormOrder/FormOrder'));
const PhonePage = lazy(() => import('src/components/pages/PhonePage/PhonePage'));

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Suspense fallback={<Spinner animation="border" className="spinner" />}>
          <Switch>
            <Route path="/phonePage/:id" component={PhonePage} />

            <Route path="/basket" component={Basket} />

            <Route path="/form-order" component={FormOrder} />

            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
