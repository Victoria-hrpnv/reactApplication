import './PropertiesForm.css'
import {
    FieldError, FieldErrorsImpl,
    Merge,
    RegisterOptions,
    UseFormRegisterReturn
} from 'react-hook-form'

interface FormValues {
    name: string // Замените на более конкретные типы, если возможно
}
interface Props{
    register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
    name:string
    formLabel:string
    errors?:   FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    mas: {key: number, value: string, label: string }[]
    className: string
}
export default function FormSelect ({register,name,formLabel, errors, mas, className }:Props) {
    return(
        <div className = {(className === 'form_input form_input-budget') ? 'form_field_wrapper select_wrapper-budget' : 'form_field_wrapper select_wrapper'}>
            <label className={'form_label'} htmlFor={name}>{formLabel} {errors && <p className={'email_error-form'}>{errors.message}</p>} </label>
            <select className={className}
                    {...register(name, {
                required: ' \u00A0\u00A0*',
            })}>

                {mas.map((item) =>
                    <option className={'select_label'} key={item.key} value={item.value}>
                        {item.label}
                    </option> )}

            </select>

        </div>
    )
}