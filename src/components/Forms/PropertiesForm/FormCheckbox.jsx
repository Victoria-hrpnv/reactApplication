import './PropertiesForm.css'
import {useState} from "react";

export default function FormCheckbox ({register,type, placeholder, name,formLabel, errors, pattern, onFocus, check }) {

    return(
        <div className = {check === true ? 'form_field_wrapper checkbox-true' : 'form_field_wrapper checkbox-false' }>
            <label className={'form_label'} htmlFor={name}>{formLabel} </label>
            <input className={'form_input form_input_simple'}
                   {...register(name, {
                       required: check ? 'This field is required' : false,
                       pattern: {
                           value: pattern,
                           message: 'Information entered incorrectly'
                       }
                   })}
                type={type}
                placeholder={placeholder}
                   onFocus={onFocus}
            />
            {errors && <p className={'email_error'}>{errors.message}</p> }
        </div>
    )
}