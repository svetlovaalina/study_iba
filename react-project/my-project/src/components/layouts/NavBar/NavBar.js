import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import classes from './NavBar.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../App";
// import {makeStyles} from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//     button: {
//         display: 'block',
//         marginTop: theme.spacing(2)
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120
//     }
// }));

export const NavBar = () => {

    // const classes = useStyles();
    // const [sortType,
    //     setSortType] = useState('');
    // const [open,
    //     setOpen] = useState(false);
    const {phoneList, setPhoneList, filterPhoneList, setFilterPhoneList} = useContext(Context);
    const [searchText,
        setSearchText] = useState('');

    const onInputChange = (event) => {
        setSearchText(event.currentTarget.value)

    }
    const searchFun = () => {
        const phoneListNavBar = phoneList.filter(phoneListObj => phoneListObj.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterPhoneList(phoneListNavBar)
    }

    // function compare(a, b) {
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     return 0;
    // }

    // const handleChange = (event) => {
    //     setSortType(event.target.value);
        
    // };

    // const handleClose = () => {
    //     setOpen(false);
    //     if (sortType === 10) {
    //         setFilterPhoneList(phoneList.sort(compare))
    //         console.log(filterPhoneList)
    //     }
    
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };

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

                {/* <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Sort by</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={sortType}
                            onChange={handleChange}>
                            
                            <MenuItem value={1}>Newest</MenuItem>
                            <MenuItem value={10}>Alphabetical</MenuItem>
                        </Select>
                    </FormControl>
                </div> */}

                <Form inline>
                    <input
                        type='text'
                        className='form-control'
                        value={searchText}
                        onChange={onInputChange}/> {/* <FormControl type="text" placeholder="Search" className="mr-sm-2"/> */}

                    <Button variant="outline-light" onClick={searchFun}>
                        Search
                    </Button>

                </Form>
            </Navbar>

        </div>

    )

}