
import React , {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './FormOrder.module.css';
import {useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import {getProfileData} from "../../../store/actionCreators/getProfileData"

export const FormOrder = () => {


// const onSendOrderClick = (event) => {
//     // setShow(true)
// };
const [show, setShow] = useState(false);
const [profileData, setProfileData] = useState({});
const userProfile = useSelector(state => state.profileData)

useEffect(() => {

if (Object.keys(userProfile).length ) {
    setProfileData({
    firstName: userProfile.getGivenName() || "", 
    lastName: userProfile.getFamilyName() || "",
    phone : "",
    email: userProfile.getEmail() || ''
    })
}
else  {
  setProfileData({
  firstName:  "", 
  lastName: "",
  phone : "",
  email:  ""
  })
}
}, [userProfile])

const onSendOrderClick = () => {
    setShow(true) 
    setTimeout(() => {
      window.location.href='/basket'
      localStorage.setItem("phoneListBasket", JSON.stringify([]))
      }, 1000)
      
};

  
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phone: Yup.string()
      .min(12, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    email: Yup.string().
      email('Invalid email').
      required('Required'),
      });


  return ( Object.keys(profileData).length && (
    <div>
      
      <Formik
        initialValues={
          { firstName: profileData.firstName, 
            lastName:  profileData.lastName, 
            phone : profileData.phone,
            email: profileData.email
          }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            console.log(values);
          }}>
        {({ errors, touched }) => (
         <Form className={classes.containerForm}>
           <div>
              <p> Name:   </p>
              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <p> First name:   </p>
              <Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </div>
            <div>
              <p> Phone:   </p>
              <Field name="phone" />
              {errors.phone && touched.phone ? (
                <div>{errors.phone}</div>
              ) : null}
            </div>
            <div>
              <p> Email:   </p>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
           </div>
         </Form>
       )}
     </Formik>
     <Row className="justify-content-md-center">
    
      <Col md="auto" >
        <Button
        variant="contained"
        color="primary"
        className={classes.buttonSend}
        onClick={onSendOrderClick}>
        Send
      </Button>
      </Col>
      
    </Row>
    <Row className="justify-content-md-center">
    
      <Col md="auto" >
        <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Toast.Header style={{backgroundColor:'#20c997', color:'white'}}>
            <strong className="mr-auto">The order is made</strong>
          </Toast.Header>
          {/* <Toast.Body>The order was successfully sent</Toast.Body> */}
        </Toast>
      </Col>
    </Row>
      </div>
    )) || null 
};
    
