import React, {useState, useContext, useEffect, useStyles} from 'react';
import classes from './Sort.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../../../App";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export const Sort = () => {

    const {phoneList, setPhoneList, sortType, setSortType} = useContext(Context);

    const [open,
        setOpen] = useState(false);

    const handleChange = (event) => {
        setSortType(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.formControl}>
            <FormControl >
                <InputLabel
                    id="demo-controlled-open-select-label"
                    className={classes.labelSortBy}>Sort by</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sortType}
                    onChange={handleChange}>
                    <MenuItem value={'age'}>Newest</MenuItem>
                    <MenuItem value={'name'}>Alphabetical</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}