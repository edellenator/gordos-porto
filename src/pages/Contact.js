import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }

        else if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`)
        }
        else {
            setErrorMessage('')
        }

        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
    }
   
    return (
        <form className="container" id="contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" defaultValue={name} onBlur={handleChange} className="form-control" name="name" />
            </div>
            <div className="mb-3"> 
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" defaultValue={email} onBlur={handleChange} className="form-control" name="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} className="form-control" rows="10" />
            </div>
            {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
            )}
            <button type="submit" className="btn btn-primary" id="contact-form-submit">Submit</button>
        </form>
    );
};

export default Contact;

