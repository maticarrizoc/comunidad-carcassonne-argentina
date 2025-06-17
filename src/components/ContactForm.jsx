import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

export const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_84zi0f1', 'template_zernnsr', form.current, {
                publicKey: 'SWqNm3KAtf0X082QN',
            })
            .then(
                () => {
                    alert('Mensaje enviado con éxito');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="contact-form">
            <h1>CONTACTANOS</h1>
            <p>Envíanos un mail llenando el siguiente formulario con tus dudas o comentarios relacionados a Carcassonne Argentina.</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Nombre" required />
                <input type="email" name="user_email" placeholder="Dirección de email" required />
                <textarea name="message" rows="10" cols="50" placeholder="Mensaje" required></textarea>
                <input className="button-enviar" type="submit" value="Enviar" />
            </form>
        </section>
    )
}
