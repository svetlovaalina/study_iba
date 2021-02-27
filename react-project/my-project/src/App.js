// import './App.css';
import React, {Component} from 'react';
import classes from './App.module.css';
import {List} from './components/List';


function App() {
  return (
    <div className={classes.App}>
    <h1 className={classes.Header}></h1>
    <List />
    </div>
  );
}

export default App;
