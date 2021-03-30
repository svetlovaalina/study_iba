
import React , {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './FormOrder.module.css';
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";
import {getProfileData} from "../../../store/actionCreators/getProfileData"

export const FormOrder = () => {
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
}, [userProfile])


  
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
        email: Yup.string().email('Invalid email').required('Required'),
      });
  return ( Object.keys(profileData).length && (
      <div>
        {/* <h2> Please fill out the order form! </h2> */}
        <Formik
          initialValues={
            {
                firstName: profileData.firstName, 
                lastName:  profileData.lastName, 
                phone : profileData.phone,
                email: profileData.email
            }
          }
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}>

         {({ errors, touched }) => (
         <Form className={classes.containerForm}>

             <p> Name:   </p>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

           <p> First name:   </p>
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}

            <p> Phone:   </p>
           <Field name="phone" />
           {errors.phone && touched.phone ? (
             <div>{errors.phone}</div>
           ) : null}

           <p> Email:   </p>
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
      </div>
    )) || null 
};
    
