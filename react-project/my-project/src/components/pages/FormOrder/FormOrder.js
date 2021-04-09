import React, {useEffect, useState, useRef} from 'react';
import { useHistory} from "react-router-dom"; 
import {Formik} from 'formik';
import classes from './FormOrder.module.css';
import {useSelector} from "react-redux";
import {userProfileSelector} from '../../../store/selectors/userProfileSelector'
import { Button} from 'react-bootstrap';
import {validationSchema} from '../../../utils/formHelper/formOrderValidation'
import {FormGroup} from '../../common/FormGroup'
import {ModalWindow} from '../../common/ModalWindow'
import useFetch from 'use-http'
import Spinner from 'react-bootstrap/Spinner';


export const FormOrder = () => {
    const [isSuccessfulMessageShow, setIsSuccessfulMessageShow] = useState(false);
    const [isErrorOrder,setIsErrorOrder] = useState(false)
    const [profileData,setProfileData] = useState(null); 
    const [orderId,setOrderId] = useState()
    const [errorType, setErrorType] = useState('')
    const userProfile = useSelector(userProfileSelector)
    const sendFormRef = useRef(null)
    const [orderName,setOrderName] = useState()
    let history = useHistory();
    const options = {}

   
    

    useEffect(() => {
      if (userProfile) { 
        setProfileData({
          firstName: userProfile.getGivenName() || '',
          lastName: userProfile.getFamilyName() || '',
          phone: '',
          email: userProfile.getEmail() || ''
        })
      } else {
        setProfileData({firstName: '', lastName: '', phone: '', email: ''})
      }
    }, [userProfile])

    const handleSendOrderSubmit = (values, {setSubmitting}) => {
      setSubmitting(true);
      sendForm(values);        
      setSubmitting(false);
    }
    
    const { post, response, loading, error } = useFetch('https://jsonplaceholder.typicode.com')
 
    async function sendForm(values) {
      // try {
        const orderContent =  JSON.parse(localStorage.getItem('phoneListBasket'))
        .map(item => ({id : item.id , amount: item.amount}))
        const responseJSON = await post('/posts', {...values,orderContent : orderContent})
        if (response.ok) {
          setOrderId(responseJSON.id)
          setOrderName(responseJSON.name)
          setIsSuccessfulMessageShow(true)
  
          setTimeout(() => {
            setIsSuccessfulMessageShow(false)
            localStorage.setItem("phoneListBasket",JSON.stringify([]))
            history.push("/");
            },4000);
        }
        else {
              console.error(error)
              setIsErrorOrder(true)
              // setErrorType(error.message)
          
        }
     
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        //   method: "POST",
        //   mode: "cors",
        //   headers: {
        //       "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({...values,orderContent : orderContent})
        // })
        // const responseJSON = await response.json();
        // setOrderId(responseJSON.id)
        // setOrderName(responseJSON.name)
        // setIsSuccessfulMessageShow(true)

        // setTimeout(() => {
        //   setIsSuccessfulMessageShow(false)
        //   localStorage.setItem("phoneListBasket",JSON.stringify([]))
        //   history.push("/");
        //   }, 4000);
      // } catch (error) {
      //   debugger;
      //     console.error(error)
      //     setIsErrorOrder(true)
      //     setErrorType(error.message)
      // }
    }

    return (profileData && ( 
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
                  touched={touched} errors={errors}/>

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

                <ModalWindow modalType='Success' showState={isSuccessfulMessageShow} setHideState={setIsSuccessfulMessageShow} 
                modalTitle='Sent successfuly' orderName={orderName} orderId={orderId} />
              </form>
            )}
          </Formik> 
         {error  && <ModalWindow modalType='Error' showState={isErrorOrder} setHideState={setIsErrorOrder} 
          modalTitle='Error' errorType={error.message} /> 
         }
      </div>
  ) || null);
}
