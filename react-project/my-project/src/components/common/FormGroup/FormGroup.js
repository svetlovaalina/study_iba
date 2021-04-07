import React from 'react';
import {Form} from 'react-bootstrap';
import classes from './FormGroup.module.css';

export const FormGroup = ({fieldLabel,nameControl,namePlaceholder,handleChange,
  handleBlur,values,touched,errors}) => {
    return (
      <Form.Group controlId="formName" className={classes.formGroup}>
        <Form.Label>
          {fieldLabel} :
        </Form.Label>
        <Form.Control type="text"  name={nameControl} placeholder={namePlaceholder} 
        onChange={handleChange} onBlur={handleBlur} value={values[nameControl]} 
        className={ touched[nameControl] && errors[nameControl]
        ? classes.error : null}/>
          {touched[nameControl] && errors[nameControl] ? 
          (
            <div className={classes.errorMessage}>
              {errors[nameControl]}
            </div>
          ) : null}
      </Form.Group>
    )
};