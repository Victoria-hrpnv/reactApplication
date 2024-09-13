import './PropertiesForm.css'
import {
    FieldError,
    RegisterOptions,
    UseFormRegisterReturn
} from 'react-hook-form';

interface Props {
    register:(name: string, options?: RegisterOptions) => UseFormRegisterReturn;
    name: string
    formLabel: string
    type: string
    placeholder: string
    pattern: RegExp
    errors?:  FieldError | undefined
}
export default function FormField ({register,name,formLabel, type, placeholder,pattern, errors }:Props) {

    return(
       <div className={'form_field_wrapper'}>
           <label className={'form_label'} htmlFor={name}>{formLabel}{errors && <p className={'email_error-form'}>{errors.message}</p> } </label>
           <input
               {...register(name, {
                required: '*',
                   minLength: {
                   value: 1,
                   message: 'Minimum length is 1 characters'
               },
                   pattern: {
                   value: pattern,
                   message: 'Incorrect information'
               }
               })}
               className={'form_input form_input_simple'}
               type={type}
               placeholder={placeholder}
           />

       </div>
    )
}