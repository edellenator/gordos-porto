import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const smLinks = {
        github: 'https://github.com/edellenator',
        linkedIn: 'https://www.linkedin.com/in/erikakiradell/',
        stackOverflow: 'https://stackoverflow.com/users/19629393/erik-dell'
    }
    return (
            <div className="w-100 bg-light footer">
                <div className="row">
                    <div className="col-12">
                        <h3>Erik  Dell <span><FontAwesomeIcon icon={faCopyright} size='xs' /></span> 2022
                            <span className="m-4">
                                <a href={smLinks.github} target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} size='1x' />
                                </a>
                            </span>
                            <span className="m-4">
                                <a href={smLinks.stackOverflow} target='_blank'>
                                    <FontAwesomeIcon icon={faStackOverflow} size='1x' />
                                </a>
                            </span>
                            <span className="m-4">
                                <a href={smLinks.linkedIn} target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} size='1x' />
                                </a>
                            </span>
                        </h3>
                      
                    </div>
                </div>
            </div>
    );
}

export default Footer;