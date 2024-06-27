import { TextField } from '@mui/material';
import styles from '../css/contact.module.css'
import EmptyTextarea from './TextAreaAutosize';
import { useRef, useState } from 'react';
import { ContactFormModel, subscribeContactForm } from '@/api/website';
import { useTranslations } from 'next-intl';

const ContactPage = () => {
    const t = useTranslations('Contact');
    const [form, setForm] = useState<Partial<ContactFormModel>>({});
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isLastnameError, setIsLastnameError] = useState<boolean>(false);
    const [isFirstNameError, setIsFirstNameError] = useState<boolean>(false);
    const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
    const formFeedback = useRef<HTMLSpanElement>(null);

    const handleSubmit = async () => {
        if (!formFeedback.current) return;

        const isEmail = (str: string): boolean => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);

        if (!form.email?.length || !isEmail(form.email ?? '')) {
            setIsEmailError(true);
            return;
        } else setIsEmailError(false);

        if (!form.firstname?.length) {
            setIsFirstNameError(true);
            return;
        } else setIsFirstNameError(false);

        if (!form.lastname?.length) {
            setIsLastnameError(true);
            return;
        } else setIsLastnameError(false);

        if (!form.phone?.length) {
            setIsPhoneError(true);
            return;
        } else setIsPhoneError(false);

        try {
            await subscribeContactForm(form as ContactFormModel);
            formFeedback.current.textContent = t('feedback.success');
            formFeedback.current.className = 'success';
        } catch (err: any) {
            formFeedback.current.textContent = err.message;
            formFeedback.current.className = 'error';
        }
    };

    return (
        <>
            <a id="contact"></a>
            <section className={`section ${styles.contact_section}`}>
                <div className={`content ${styles.form}`}>
                    <div className={styles.form_textfields}>
                        <TextField
                            required
                            error={isFirstNameError}
                            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                            fullWidth
                            label={t('form.firstName')}
                            variant="outlined"
                        />
                        <TextField
                            required
                            error={isLastnameError}
                            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                            fullWidth
                            label={t('form.lastName')}
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.form_textfields}>
                        <TextField
                            required
                            error={isEmailError}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            fullWidth
                            type="email"
                            label={t('form.email')}
                            variant="outlined"
                        />
                        <TextField
                            required
                            error={isPhoneError}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            fullWidth
                            type="tel"
                            label={t('form.phone')}
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.form_textfields}>
                        <EmptyTextarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            style={{ width: '100%' }}
                            minRows={8}
                            placeholder={t('form.message')}
                        />
                    </div>
                    <span ref={formFeedback} />
                    <a onClick={handleSubmit} type="submit" className={`${styles.button} button`}>
                        <p>{t('form.submit')}</p>
                    </a>
                </div>
                <div className={`content body_paragraph`}>
                    <span className={`section_subtitle`}>{t('contact.subtitle')}</span>
                    <span className={`section_title ${styles.contact_title}`}>{t('contact.title')}</span>
                    <p className={styles.contact_content}>
                        {t('contact.content')}
                    </p>
                </div>
            </section>
            <div className={`section_end ${styles.about_end}`}></div>
        </>
    );
};


export default ContactPage