import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Contact.css';
import contact from '../../data/contact.js';

function Contact() {
    return (
        <div>
            <h3>
                GET IN TOUCH
            </h3>
            <div className="contacts">
                <div className="contact" >
                    <a className="space_vertical" href={contact.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Github
                    </a>         
                </div>
                <div className="contact" >
                    <a className="space_vertical" href={`mailto: ${contact.email}`} target="_blank" rel="noopener noreferrer">
                        <MdEmail /> Email
                    </a>           
                </div>
                <div className="contact" >
                    <a className="space_vertical" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn /> LinkedIn
                    </a>
                </div>       
            </div>
        </div>
    );
}

export default Contact;