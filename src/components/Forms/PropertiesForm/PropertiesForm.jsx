import SectionHeader from "../../SectionHeader/SectionHeader.jsx";
import './PropertiesForm.css'
import {useForm} from "react-hook-form";
import FormField from "./FormField.jsx";
import Button from "../../Button/Button.jsx";
import FormSelect from "./FormSelect.jsx";
import {
    bathrooms,
    location,
    propertyType,
    bedrooms,
    budget
} from "../../../data/formData.js";
import FormCheckbox from "./FormCheckbox.jsx";
import {useState} from "react";
import {useEffect} from "react";


export default function PropertiesForm() {
    const {register, handleSubmit, formState} = useForm({
        mode: "onChange"
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    const errors = formState.errors;

    const [check, setCheck] = useState({
        numberCheck: true,
        emailCheck: false,
    })

    const toggleCheckBox = () => {
        setCheck(prev => ({
            ...prev,
            numberCheck: !prev.numberCheck,
            emailCheck: !prev.emailCheck
        }));
    };

     useEffect(() => {
        console.log(check);
    }, [check]);



    const createFormField = (name, formLabel, type, placeholder, pattern) => (
        <FormField
            register={register}
            name={name}
            formLabel={formLabel}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            errors={errors[name]}
        />
    );
    return (
        <section className={'properties_form'}>
            <div className={'form_wrapper'}>
                <SectionHeader
                    title={'Let\'s Make it Happen'}
                    description={'Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don\'t wait; let\'s embark on this exciting journey together.'}
                    width={'1297px'}
                />

                <form onSubmit={handleSubmit(onSubmit)} className={'form'}>
                    <div className={'form_userData'}>
                        {createFormField('FirstName', 'First Name', 'text', 'Enter First Name', /^[A-Za-zА-Яа-яЁё]+$/)}
                        {createFormField('LastName', 'Last Name', 'text', 'Enter Last Name', /^[A-Za-zА-Яа-яЁё]+$/)}
                        {createFormField('Email', 'Email', 'email', 'Enter your Email', /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)}
                        {createFormField('Phone', 'Phone', 'phone', 'Enter Phone Number', /^\+?[1-9]\d{10}$/)}

                        <FormSelect name={'Location'}
                                    formLabel={'Preferred Location'}
                                    register={register} errors={errors.Location}
                                    mas={location}
                                    className={'form_input form_input_select'}></FormSelect>
                        <FormSelect name={'propertyType'}
                                    formLabel={'Property Type'}
                                    register={register}
                                    errors={errors.propertyType}
                                    mas={propertyType}
                                    className={'form_input form_input_select'}></FormSelect>
                        <FormSelect name={'bedrooms'}
                                    formLabel={'No, of Bedrooms'}
                                    register={register} errors={errors.bedrooms}
                                    mas={bedrooms}
                                    className={'form_input form_input_select'}></FormSelect>
                        <FormSelect name={'bathrooms'}
                                    formLabel={'No, of Bathrooms'}
                                    register={register}
                                    errors={errors.bathrooms}
                                    mas={bathrooms}
                                    className={'form_input form_input_select'}></FormSelect>
                        <FormSelect name={'budget'}
                                    formLabel={'Select Budget'}
                                    register={register}
                                    errors={errors.budget}
                                    mas={budget}
                                    className={'form_input form_input-budget'}></FormSelect>

                        <FormCheckbox register={register}
                                      name={'numberCheckbox'}
                                      formLabel={'Preferred Contact Method'}
                                      placeholder={'Enter Your Number'}
                                      type={'tel'}
                                      errors={errors.numberCheckbox}
                                      pattern={/^\+?[1-9]\d{10}$/}
                                      onFocus={ check.numberCheck === false? toggleCheckBox: ()=>{}}
                                      check = {check.numberCheck}/>
                        <FormCheckbox register={register}
                                      name={'emailCheckbox'}
                                      formLabel={' \u200B'}
                                      type={'email'}
                                      placeholder={'Enter Your Number'}
                                      errors={errors.emailCheckbox}
                                      pattern={/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
                                      onFocus={check.emailCheck === false? toggleCheckBox: ()=>{}}
                                      check = {check.emailCheck}
                        />

                    </div>
                    <Button type={"submit"}>Send Your Message</Button>
                </form>
            </div>
        </section>)
}