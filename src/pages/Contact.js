import React from "react";

const Contact = () => {
    return (
        <form className="container" id="contact-form">
            <div className="mb-3">
                <label htmlFor="name-input" className="form-label">Name</label>
                <input type="name-input" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="email-input" className="form-label">Email address</label>
                <input type="email-input" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="message-body" className="form-label">Message</label>
                <textarea type="message-body" className="form-control" id="message" rows="10" />
            </div>
            <button type="submit" className="btn btn-primary" id="contact-form-submit">Submit</button>
        </form>
    );
};

export default Contact;

