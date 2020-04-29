import React from "react";
import s from './formsControls.module.css';
import { Field } from "redux-form";


const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    // debugger;
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restprops} = props;
    return <FormControl {...props}><textarea {...input} {...restprops}/></FormControl>
}
        

export const Input = (props) => {
    const {input, meta, child, ...restprops} = props;
    return <FormControl {...props}><input {...input} {...restprops}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props={}, text='') => <div><Field 
            placeholder={placeholder}
            name={name} 
            validate={validators} 
            component={component} 
            {...props} 
            text /></div>

