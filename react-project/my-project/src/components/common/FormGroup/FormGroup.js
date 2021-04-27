import React from 'react';
import { Form } from 'react-bootstrap';
import classes from './FormGroup.module.scss';

export const FormGroup = ({ fieldLabel, nameControl, namePlaceholder, handleChange, handleBlur, values, touched, errors }) => {
  return (
    <Form.Group controlId="formName" className={classes.formGroup}>
      <Form.Label>{fieldLabel} :</Form.Label>
      <Form.Control
        className={classes.controlForm}
        type="text"
        name={nameControl}
        placeholder={namePlaceholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[nameControl]}
      />
      {touched[nameControl] && errors[nameControl] ? <div className={classes.errorMessage}>{errors[nameControl]}</div> : null}
    </Form.Group>
  );
};
