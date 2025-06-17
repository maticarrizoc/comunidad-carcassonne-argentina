import { Navbar } from './Navbar';
import { ContactForm } from './ContactForm';
import { Helmet } from 'react-helmet-async'

export const ContactPage = () => {
    return (
        <>
              <Navbar />
              <ContactForm />
            </>
    )
}