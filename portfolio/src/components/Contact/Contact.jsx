import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Contact.css';
import contact from '../../data/contact.js';

function Contact() {
    return (
        <div id="contact">
            <h3>
                GET IN TOUCH
            </h3>
            <div className="contacts">
                <div className="contact" >
                    <a className="space_vertical" href={contact.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                        <span>
                            Github
                        </span>
                    </a>         
                </div>
                <div className="contact" >
                    <a className="space_vertical" href={`mailto: ${contact.email}`} target="_blank" rel="noopener noreferrer">
                        <MdEmail className="icon" /> 
                        <span>
                            Email
                        </span>
                    </a>           
                </div>
                <div className="contact" >
                    <a className="space_vertical" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="icon" />
                        <span>
                            LinkedIn
                        </span>
                    </a>
                </div>       
            </div>
        </div>
    );
}

export default Contact;