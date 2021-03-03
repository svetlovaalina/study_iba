import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../App";

export const NavBar = () => {
    const {phoneList, setPhoneList} = useContext(Context);
    const [searchText,setSearchText] = useState('');

    const onInputChange = (event) => {
        setSearchText(event.currentTarget.value)

    }
    const SearchFun = () => {
        const phoneListNavBar = phoneList.filter(phoneListObj => phoneListObj.name.toLowerCase().includes(searchText.toLowerCase()));
        setPhoneList(phoneListNavBar)
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand >
                    <Link to="/" className={classes.navBarLink}>
                        My-project</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link>*/}
                </Nav>
                <Form inline>
                    <input
                        type='text'
                        className='form-control'
                        value={searchText}
                        onChange={onInputChange}/>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2"/> */}

                    <Button variant="outline-light" onClick={SearchFun}>
                        Search
                    </Button>

                </Form>
            </Navbar>

        </div>

    )
}