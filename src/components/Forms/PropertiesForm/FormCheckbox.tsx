import './PropertiesForm.css'
import React, {useState} from "react";
import {
    FieldError, FieldErrorsImpl, Merge,
    RegisterOptions,
    UseFormRegisterReturn
} from 'react-hook-form';

interface Props {
    register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
    type: string
    placeholder : string
    name: string
    formLabel: string
    errors?:  FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    pattern: RegExp
    onFocus: React.FocusEventHandler<HTMLInputElement>
    check: boolean
}
export default function FormCheckbox ({register,type, placeholder, name,formLabel, errors, pattern, onFocus, check }:Props) {

    return(
        <div className = {check ? 'form_field_wrapper checkbox-true' : 'form_field_wrapper checkbox-false' }>
            <label className={'form_label'} htmlFor={name}>{formLabel} {errors && <p className={'email_error-form'}>{errors.message}</p> } </label>
            <input className={'form_input form_input_simple'}
                   {...register(name, {
                       required: check ? '\u00A0\u00A0*' : false,
                       pattern: {
                           value: pattern,
                           message: ' incorrect information'
                       }
                   })}
                type={type}
                placeholder={placeholder}
                onFocus={onFocus}
            />
            {/*{errors && <p className={'email_error'}>{errors.message}</p> }*/}
        </div>
    )
}