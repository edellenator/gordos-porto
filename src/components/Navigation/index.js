import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul className="list-group list-group-horizontal rounded-0">
                <li className="bg-light h3 border border-0 text-center list-group-item flex-fill">About Me</li>
                <li className="bg-light h3 border border-0 text-center list-group-item flex-fill">Portfolio</li>
                <li className="bg-light h3 border border-0 text-center list-group-item flex-fill">Resume</li>
                <li className="bg-light h3 border border-0 text-center list-group-item flex-fill">Contact</li>
            </ul>
        </nav>
    );
}

export default Navigation;