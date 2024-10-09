import './EmailFormFootef.css'
import {useForm} from "react-hook-form";

export default function EmailFormFooter() {
    const {register, handleSubmit, formState} = useForm({
        mode: "onChange",

    })

    const emailError = formState.errors['email']?.message;
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'footer_email'}>
            <input
                className={'email_input'}
                type="email"
                placeholder={'Enter Your Email'}

                {...register('email', {
                    required: true,
                    minLength: {
                        value: 3,
                        message: 'Minimum length is 3 characters'
                    },
                    pattern: {
                       value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                        message: 'Invalid email address'
                    }
                })}

            />

            {emailError && <p className={'email_error'}>{emailError}</p>}

            <button type={'submit'} className="email_send">
                <img src="/SendEmail.png" alt="Отправить email"
                     width={25} height={25}/>
            </button>
        </form>
    )
}
