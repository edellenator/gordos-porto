import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Footer = () => {
    const smLinks = {
        github: 'https://github.com/edellenator',
        linkedIn: 'https://www.linkedin.com/in/erikakiradell/',
        stackOverflow: 'https://stackoverflow.com/users/19629393/erik-dell'
    }
    console.log(smLinks.github)
    return (
            <div className="w-100 bg-light footer">
                <div className="row">
                    <div className="col-12">
                        <h5>Erik Dell © 2022</h5>
                        <a href={smLinks.github} target="_blank">
                        <FontAwesomeIcon icon={brands('git-square')}
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;