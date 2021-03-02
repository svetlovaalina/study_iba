import React, {useState} from 'react';
import classes from './App.module.css';
import {PhonePage} from './components/pages/PhonePage';
import {Home} from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/layouts/NavBar";

export const Context = React.createContext({
    phoneList: [],
    setPhoneList: () => {}
});

function App() {
    const [phoneList,setPhoneList] = useState([]);
    return (
        <div className={classes.App}>
            <Context.Provider value={{phoneList,setPhoneList}}>
                <Router >
                    <NavBar/>
                    <Switch>
                        <Route path="/phonePage/:id"><PhonePage/>
                        </Route>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Router>
            </Context.Provider>
        </div>
    );
}

export default App;
