import React, {useState} from 'react';
import classes from './App.module.css';
import {PhonePage} from './components/pages/PhonePage';
import {Home} from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/layouts/NavBar";
import {Basket} from './components/pages/Basket';
import store from "./store/store"

export const Context = React.createContext({
    phoneList: [],
    setPhoneList: () => {},
    searchText: '',
    setSearchText: () => {},
    sortType: '',
    setSortType: () => {}

});

function App() {
    const [phoneList,
        setPhoneList] = useState([]);
    const [searchText,
        setSearchText] = useState('');
    const [sortType,
        setSortType] = useState('Newest');
    store.subscribe(() => console.info(store.getState()))
    return (
        <div className={classes.App}>
            <Context.Provider
                value={{
                phoneList,
                setPhoneList,
                searchText,
                setSearchText,
                sortType,
                setSortType
            }}>
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
            </Context.Provider>
        </div>
    );
}

export default App;
