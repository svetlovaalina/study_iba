import React, {useState, useContext, useEffect} from 'react';
import classes from './DisplayEditor.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Context} from "../../../App";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const DisplayEditor = () => {

    // const classes = useStyles(); const [sortType,     setSortType] =
    // useState(''); const [open,     setOpen] = useState(false);

    const {phoneList, setPhoneList, searchText, setSearchText} = useContext(Context);

    const onInputChange = (event) => {
        setSearchText(event.currentTarget.value)
    }

    // function compare(a, b) {     if (a.name < b.name) {         return -1;     }
    //  if (a.name > b.name) {         return 1;     }     return 0; } const
    // handleChange = (event) => {     setSortType(event.target.value); }; const
    // handleClose = () => {     setOpen(false);     if (sortType === 10) {
    // setFilterPhoneList(phoneList.sort(compare)) console.log(filterPhoneList) } };
    // const handleOpen = () => { setOpen(true); };

    return (
        <div className={classes.searchForm}>

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
                <p>Search:
                </p>
                <input
                    type='text'
                    className='form-control'
                    value={searchText}
                    onChange={onInputChange}/>
            </Form>

        </div>

    )

}