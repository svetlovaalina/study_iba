import React from 'react';
import {Form, Button} from 'react-bootstrap';
import classes from './FormGroup.module.css';

export const FormGroup = ({fieldLabel, nameControl, namePlaceholder, handleChange, handleBlur, values, touched, errors }) => {
    return (
        <Form.Group controlId="formName" className={classes.formGroup}>
            <Form.Label>
                {fieldLabel}
                :</Form.Label>
            <Form.Control type="text" name={nameControl} placeholder={namePlaceholder} onChange={handleChange} /* Set onBlur to handleBlur */
                onBlur={handleBlur} /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values[nameControl]} /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                className={touched[nameControl] && errors[nameControl]
                ? classes.error
                : null}/> {touched[nameControl] && errors[nameControl]
                ? (
                    <div className={classes.errorMessage}>{errors[nameControl]}</div>
                )
                : null}
        </Form.Group>
    )
};