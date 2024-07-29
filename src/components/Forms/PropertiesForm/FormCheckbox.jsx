import './PropertiesForm.css'
import {useState} from "react";

export default function FormCheckbox ({register,type, placeholder, name,formLabel, errors, pattern, onFocus, check }) {

    return(
        <div className = {check === true ? 'form_field_wrapper checkbox-true' : 'form_field_wrapper checkbox-false' }>
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