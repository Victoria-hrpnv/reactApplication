import './PropertiesForm.css'
export default function FormSelect ({register,name,formLabel, errors, mas, className }) {
    return(
        <div className = {(className === 'form_input form_input-budget') ? 'form_field_wrapper select_wrapper-budget' : 'form_field_wrapper select_wrapper'}>
            <label className={'form_label'} htmlFor={name}>{formLabel} </label>
            <select className={className}
                    {...register(name, {
                required: 'This field is required',
            })}>

                {mas.map((item) =>
                    <option className={'select_label'} key={item.key} value={item.value}>
                        {item.label}
                    </option> )}

            </select>
            {errors && <p className={'email_error'}>{errors.message}</p> }
        </div>
    )
}