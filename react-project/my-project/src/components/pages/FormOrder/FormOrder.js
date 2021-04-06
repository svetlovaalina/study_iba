import React, {useEffect, useState, useRef} from 'react';
import {Formik, Forma, Field, ErrorMessage} from 'formik';
import classes from './FormOrder.module.css';
import {useSelector} from "react-redux";
import {Form, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner';
import {validationSchema} from '../../../utils/formHelper/formOrderValidation'
import {FormGroup} from '../../common/FormGroup'
import {ModalWindow} from '../../common/ModalWindow'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const FormOrder = () => {
    const [isSuccessfullMessageShow,setIsSuccessfullMessageShow] = useState(false);
    const [isErrorOrder,setIsErrorOrder] = useState(false)
    const [profileData,setProfileData] = useState({});
    const [orderId,setOrderId] = useState()
    const [errorType, setErrorType] = useState('')
    const userProfile = useSelector(state => state.profileData)
    const sendFormRef = useRef(null)
    const [loading,setLoading] = useState(true)
    const [orderName,setOrderName] = useState()
    

    useEffect(() => {
      if (Object.keys(userProfile).length) {
        setProfileData({
          firstName: userProfile.getGivenName() || "",
          lastName: userProfile.getFamilyName() || "",
          phone: "",
          email: userProfile.getEmail() || ''
        })
        setLoading(false)
        } else {
        setProfileData({firstName: "", lastName: "", phone: "", email: ""})
       }
    }, [userProfile])

    const handleSendOrderSubmit = (values, {setSubmitting, resetForm}) => {
      setLoading(true)
      setSubmitting(true);
      // setIsSuccessfullMessageShow(true)
      sendForm(values);
      if (!isErrorOrder) {
        setTimeout(() => {
            //  window.location.href = '/'  localStorage.setItem("phoneListBasket",
            // JSON.stringify([]))
            resetForm();
        }, 3000);
      }
    }

    async function sendForm(values) {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          })
          const responseJSON = await response.json();
          setOrderId(responseJSON.id)
          setOrderName(responseJSON.name)
          setIsSuccessfullMessageShow(true)
          setLoading(false)
      } catch (error) {
        //  debugger;
          setLoading(false)
          console.error(error)
          setIsErrorOrder(true)
        
          setErrorType(error.message)
        }
    }

    return (Object.keys(profileData).length && (
      <div className={classes.container}>
        {loading && <Spinner animation="border" className='spinner'/>}
          <Formik
            initialValues={{
            name: profileData.firstName, surname: profileData.lastName,
            email: profileData.email, phone: profileData.phone
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleSendOrderSubmit}>
            { ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => 
              (<form onSubmit={handleSubmit} className={classes.mxAuto} ref={sendFormRef}>
                <FormGroup
                  fieldLabel='Name' nameControl='name' namePlaceholder='Name'
                  handleChange={handleChange} handleBlur={handleBlur} values={values}
                  touched={touched} errors={errors}/>

                <FormGroup
                  fieldLabel='Surname' nameControl='surname' namePlaceholder='Surname'
                  handleChange={handleChange} handleBlur={handleBlur} values={values}
                  touched={touched}errors={errors}/>

                <FormGroup
                  fieldLabel='Email' nameControl='email' namePlaceholder='Email'
                  handleChange={handleChange} handleBlur={handleBlur} values={values}
                  touched={touched} errors={errors}/>

                <FormGroup 
                  fieldLabel='Phone' nameControl='phone' namePlaceholder='Phone'
                  handleChange={handleChange} handleBlur={handleBlur} values={values}
                  touched={touched} errors={errors}/>

                <Button
                  variant="primary" type="submit" disabled={isSubmitting} className={classes.buttonSend}>
                  Send
                </Button>

                <ModalWindow modalType='Success' showState={isSuccessfullMessageShow} setHideState={setIsSuccessfullMessageShow} 
                modalTitle='Sent successfully' orderName={orderName} orderId={orderId} />
              </form>
            )}
          </Formik>
      <ModalWindow modalType='Error' showState={isErrorOrder} setHideState={setIsErrorOrder} 
      modalTitle='Error' errorType={errorType} />
     
      </div>
  ) || null);
}
