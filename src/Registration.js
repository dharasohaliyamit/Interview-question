import {Formik, Form} from "formik";
import * as Yup from "yup";

import React, { Component } from 'react'
const RegistrationSchema = Yup.object().shape({
    name : Yup.string()
        .required('Name is required!')
        .matches(/\D/, 'Enter only String!'),
    cell : Yup.number()
        .required('Mobile number is required!'),
    email : Yup.string()
        .email('Invalid email.')
        .required('Email is required!')
 
});
 const Registration = props => {
        return (
            <Formik
                initialValues={{
                    name:'',
                    cell:'',
                    email:''
                }}
                validationSchema={RegistrationSchema}

                onSubmit={(values,{setSubmitting}) => {
                    alert(JSON.stringify(values, null, 2));
                    props.signUp(values);
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    submitForm
                }) => (
                    <div style={{display:"flex",justifyContent:'center',alignItems:'center',height:'50vh'}}>
                        <Form onSubmit={handleSubmit}>
                            <h1>Registration Form</h1>
                                        
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Enter Name" 
                                error={errors.name && touched.name ? errors.name : null}>
                            </input><br/><br/>

                            <input 
                                type="text" 
                                name="cell" 
                                placeholder="Enter Cell No" 
                                error={errors.cell && touched.cell ? errors.cellname : null}>
                            </input><br/><br/>

                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                error={errors.email && touched.email ? errors.email : null}>
                            </input><br/><br/>

                            <input 
                                type="text" 
                                name="dob" 
                                placeholder="Enter DOB" 
                                error={errors.dob && touched.dob ? errors.dob : null}>
                            </input><br/><br/>

                            <input 
                                type="text" 
                                name="city"                               
                                placeholder="Enter City" 
                                error={errors.city && touched.city ? errors.city : null}>
                            </input><br/><br/>

                            <input 
                                type="text" 
                                name="zipcode" 
                                placeholder="Enter ZipCode" 
                                error={errors.zipcode && touched.zipcode ? errors.zipcode : null}>
                            </input><br/><br/>

                            <button name="submit">Submit</button>
                        </Form>
                    </div>
                )}
            </Formik>
            
        );
};
export default Registration;








