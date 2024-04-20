import { TextField } from '@mui/material';
import styles from '../css/contact.module.css'
import EmptyTextarea from './TextAreaAutosize';
import { useRef, useState } from 'react';


interface IContactForm {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

const ContactPage = () => {
    const [form, setForm] = useState<Partial<IContactForm>>({})
    const [isEmailError, setIsEmailError] = useState<boolean>(false)
    const [isLastnameError, setIsLastnameError] = useState<boolean>(false)
    const [isFirstNameError, setIsFirstNameError] = useState<boolean>(false)
    const [isPhoneError, setIsPhoneError] = useState<boolean>(false)
    const formFeedback = useRef<HTMLSpanElement>(null)

    const handleSubmit = () => {
        if (!formFeedback.current)
            return

        const isEmail = (str: string): boolean => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(str);

        if (!form.email?.length || !isEmail(form.email ?? '')) {
            setIsEmailError(true)
            return
        }
        else
            setIsEmailError(false)
        if (!form.firstName?.length) {
            setIsFirstNameError(true)
            return
        }
        else
            setIsFirstNameError(false)
        if (!form.lastName?.length) {
            setIsLastnameError(true)
            return
        }
        else
            setIsLastnameError(false)
        if (!form.phone?.length) {
            setIsPhoneError(true)
            return
        }
        else
            setIsPhoneError(false)

        console.log('Submitting form', form)

        formFeedback.current.textContent = "We'll reach you soon!"
        formFeedback.current.className = 'success'

        formFeedback.current.textContent = "[Error description]"
        formFeedback.current.className = 'error'
    }


    return (
        <>
            <a id="contact"></a>
            <section className={`section ${styles.contact_section}`}>
                <div className={`content ${styles.form}`}>
                    <div className={styles.form_textfields}>
                        <TextField required error={isFirstNameError} onChange={e => setForm({ ...form, firstName: e.target.value })} fullWidth label="First Name" variant="outlined" />
                        <TextField required error={isLastnameError} onChange={e => setForm({ ...form, lastName: e.target.value })} fullWidth label="Last Name" variant="outlined" />
                    </div>
                    <div className={styles.form_textfields}>
                        <TextField required error={isEmailError} onChange={e => setForm({ ...form, email: e.target.value })} fullWidth type='email' label="Email Address" variant="outlined" />
                        <TextField required error={isPhoneError} onChange={e => setForm({ ...form, phone: e.target.value })} fullWidth type='tel' label="Phone No." variant="outlined" />
                    </div>
                    <div className={styles.form_textfields}>
                        <EmptyTextarea onChange={e => setForm({ ...form, message: e.target.value })} fullWidth minRows={8} placeholder='Message..' />
                    </div>
                    <span ref={formFeedback} />
                    <a onClick={handleSubmit} type="submit" className={`${styles.button} button`}>
                        <p>Submit now</p>
                    </a>
                </div>
                <div className={`content body_paragraph`}>
                    <span className={`section_subtitle`}>Get in touch</span>
                    <span className={`section_title ${styles.contact_title}`}>Request for early access</span>
                    <p className={styles.contact_content}>
                        The platform is still at a development stage, we would benefit a lot by having key users.
                        By joining the project at its early stage you can help us a lot to improve the service
                    </p>
                </div>
            </section>
            <div className={`section_end ${styles.about_end}`}></div>
        </>
    )
}

export default ContactPage