import React from 'react'
import { Field, ErrorMessage } from 'formik';


const TextField = ({id, label, type, name, description}) => {
    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <Field id={id} type={type} name={name}/>
            <small>{description}</small>
            <ErrorMessage name={name} />
        </React.Fragment>
    );
};

export default TextField