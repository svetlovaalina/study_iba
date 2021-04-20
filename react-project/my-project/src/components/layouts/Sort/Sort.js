import React, { useState } from 'react';
import classes from './Sort.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { updateSortType } from '../../../store/actionCreators/updateSortType';
import { sortTypeSelector } from '../../../store/selectors/sortTypeSelector';

export const Sort = () => {
  const dispatch = useDispatch();
  const sortTypeStore = useSelector(sortTypeSelector);
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    dispatch(updateSortType(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.formControl}>
      <FormControl>
        <InputLabel id="demo-controlled-open-select-label" className={classes.labelSortBy}>
          Sort by
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sortTypeStore}
          onChange={handleChange}
        >
          <MenuItem value={'age'}>Newest</MenuItem>
          <MenuItem value={'name'}>Alphabetical</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
