import { TextField } from '@mui/material';
import styles from '../css/contact.module.css'
import EmptyTextarea from './TextAreaAutosize';

const ContactPage = () => {

    return (
        <>
            <a id="contact"></a>
            <section className={`section ${styles.contact_section}`}>
                <div className={`content ${styles.form}`}>
                    <div className={styles.form_textfields}>
                        <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
                    </div>
                    <div className={styles.form_textfields}>
                        <TextField fullWidth id="outlined-basic" type='email' label="Email Address" variant="outlined" />
                        <TextField fullWidth id="outlined-basic" type='tel' label="Phone No." variant="outlined" />
                    </div>
                    <div className={styles.form_textfields}>
                        <EmptyTextarea fullWidth minRows={8} placeholder='Message..' aria-label="empty textarea" />
                    </div>
                    <a className={`${styles.button} button`} href="#access">
                        <p>Submit now</p>
                    </a>
                </div>
                <div className={`content`}>
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