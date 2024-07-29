import './PropertiesForm.css'
export default function FormField ({register,name,formLabel, type, placeholder,pattern, errors }) {

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