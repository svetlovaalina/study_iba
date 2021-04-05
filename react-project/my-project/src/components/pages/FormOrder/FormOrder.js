import React, {useEffect, useState, useRef} from 'react';
// import ReactDOM from "react-dom";
// import {BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import {Formik, Forma, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import classes from './FormOrder.module.css';
import {useSelector} from "react-redux";
import {Form, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
// import {truncate} from 'node:fs';



const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// Schema for yup
const validationSchema = Yup
    .object()
    .shape({
        name: Yup
            .string()
            .min(2, "*Names must have at least 2 characters")
            .max(100, "*Names can't be longer than 100 characters")
            .required("*Name is required"),
        surname: Yup
            .string()
            .min(2, "*Surname must have at least 2 characters")
            .max(100, "*Surname can't be longer than 100 characters")
            .required("*Surname is required"),
        email: Yup
            .string()
            .email("*Must be a valid email address")
            .max(100, "*Email must be less than 100 characters")
            .required("*Email is required"),
        phone: Yup
            .string()
            .matches(phoneRegExp, "*Phone number is not valid")
            .required("*Phone number required")
    });

export const FormOrder = () => {
  const [smShow,
    setSmShow] = useState(false);
  const [profileData,
    setProfileData] = useState({});
  const [orderId,
    setOrderId] = useState()
  const userProfile = useSelector(state => state.profileData)
  const sendFormRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (Object.keys(userProfile).length) {
      
      setProfileData({
        firstName: userProfile.getGivenName() || "",
        lastName: userProfile.getFamilyName() || "",
        phone: "",
        email: userProfile.getEmail() || ''
      })
      setLoading(false)
    } 
    else {
      setProfileData({firstName: "", lastName: "", phone: "", email: ""})
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
    
  }, [userProfile])


  const handleSendOrderSubmit = (values, {setSubmitting, resetForm}) => {
    setLoading(true)
    setSubmitting(true);
    // setSmShow(true)
    sendForm(values);
    
    setTimeout(() => {
       window.location.href = '/' 
       localStorage.setItem("phoneListBasket", JSON.stringify([])) 
       resetForm();
    }, 3000);
    
  }

  async function sendForm(values) {
    
    try {
      // setProfileData(sendFormRef.current)
      // console.log(profileData)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(values)
      })
      
      const responseJSON = await response.json();

      setOrderId(responseJSON.id)
      setSmShow(true)

      setLoading(false)

      console.log('Great! All good!', responseJSON.id)
    } catch {
      console.log('You have a little problems..')
    }
  }

  return (Object.keys(profileData).length && (
    <div className={classes.container}>
       {loading && 
            <Spinner animation="border"  className='spinner'/>}
    <Formik
        initialValues={{
        name: profileData.firstName,
        surname: profileData.lastName,
        email: profileData.email,
        phone: profileData.phone
    }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSendOrderSubmit}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={classes.mxAuto} ref={sendFormRef}>
              {/* {console.log(values)} */}
              <Form.Group controlId="formName" className={classes.formGroup}>
                <Form.Label>Name :</Form.Label>
                <Form.Control type="text" name="name" placeholder=" Name" onChange= {handleChange} /* Set onBlur to handleBlur */
                      onBlur={handleBlur} /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                      value={values.name} /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                      className={touched.name && errors.name
                      ? classes.error
                      : null}/> {touched.name && errors.name
                      ? (
                          <div className={classes.errorMessage}>{errors.name}</div>
                      )
                      : null}
                </Form.Group>
                <Form.Group controlId="formSurname" className={classes.formGroup}>
                    <Form.Label>Surname :</Form.Label>
                    <Form.Control type="text" /* This surname property is used to access the value of the form element via values.nameOfElement */
                        name="surname" placeholder="Surname" /* Set onChange to handleChange */
                        onChange={handleChange} /* Set onBlur to handleBlur */
                        onBlur={handleBlur} /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                        value={values.surname} /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                        className={touched.surname && errors.surname
                        ? classes.error
                        : null}/> {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                    {touched.surname && errors.surname
                        ? (
                            <div className={classes.errorMessage}>{errors.surname}</div>
                        )
                        : null}
                </Form.Group>
                <Form.Group controlId="formEmail" className={classes.formGroup}>
                    <Form.Label>Email :</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={touched.email && errors.email
                        ? classes.error
                        : null}/> {touched.email && errors.email
                        ? (
                            <div className={classes.errorMessage}>{errors.email}</div>
                        )
                        : null}
                </Form.Group>
                <Form.Group controlId="formPhone" className={classes.formGroup}>
                    <Form.Label>Phone :</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        className={touched.phone && errors.phone
                        ? classes.error
                        : null}/> {touched.phone && errors.phone
                        ? (
                            <div className={classes.errorMessage}>{errors.phone}</div>
                        )
                        : null}
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.buttonSend}>
                    Send
                </Button>
                <Modal
                    className={classes.modalWindow}
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Your order number is {orderId}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>The order has been successfully sent!</Modal.Body>
                </Modal>
                    </form>
                )}
            </Formik>
        </div>
    ) || null);
}
