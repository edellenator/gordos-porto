import React from "react";

const Resume = () => {
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-6">
                    <ul className="list-group"><h3>Technical Skills</h3>
                        <li className="list-group-item"><h4>Stacks</h4>
                            <ol className="list-group mb-2">MERN
                                <li className="list-group-item">MongoDB</li>
                                <li className="list-group-item">Express</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Node</li>
                            </ol>
                            <ol className="list-group mb-2">MEAN
                                <li className="list-group-item">MongoDB</li>
                                <li className="list-group-item">Express</li>
                                <li className="list-group-item">Angular</li>
                                <li className="list-group-item">Node</li>
                            </ol>
                        </li>
                        <li className="list-group-item">UI/Frontend
                            <ol className="list-group">
                                <li className="list-group-item">Syntactic HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">REACT</li>
                                <li className="list-group-item">Handlebars</li>
                            </ol>
                        </li>
                        <li className="list-group-item">DB/Backend
                            <ol className="list-group">
                                <li className="list-group-item">SQL</li>
                                <li className="list-group-item">NoSQL</li>
                                <li className="list-group-item">Express</li>
                                <li className="list-group-item">Mongoose</li>
                                <li className="list-group-item">Sequelize</li>
                            </ol>
                        </li>
                        <li className="list-group-item"><h4>Languages</h4>
                            <ol className="list-group">
                                <li className="list-group-item">Javascript</li>
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">LUA</li>
                                <li className="list-group-item">C#</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-group"><h3>Professional Skills</h3>
                        <li className="list-group-item">Project Management</li>
                        <li className="list-group-item">Team Management</li>
                        <li className="list-group-item">AGILE</li>
                        <li className="list-group-item">Lean 6 Sigma process evaluation</li>
                        <li className="list-group-item">Training & Development</li>
                        <li className="list-group-item">Scheduling</li>
                        <li className="list-group-item">Purchasing</li>
                        <li className="list-group-item">Art Direction</li>
                        <li className="list-group-item">Technical Direction</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <h3>Professional History</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h4>Astek Wallcovering Inc</h4>
                        <ol className="list-group">
                            <li className="list-group-item">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Technical Director</div>
                                    Research, advise and implement technical developments via vendor sales
                                    relations, industry literature, standards organizations, competition insights,
                                    national and international certifications. Developed and maintained:
                                    standards, onboarding strategies, best practices, and technical training;
                                    converted to white papers and lead monthly meetings introducing new
                                    concepts and technical knowledge
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Production Manager</div>
                                    Manage a growing team of Print Technicians, pre-press technicians, and
                                    packagers. Track and share all print deliverables from pre-press to
                                    distribution. Introduced and implemented Workflow optimization
                                    procedures including web based solutions and SOP’s. Introduced and
                                    implemented software based color management solutions.
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Print Production Coordinator</div>
                                    Supervision of interdepartmental workflow from pre-press (Concept,
                                    design, pre-flight, and RIP) to production (Printing, Packaging, and
                                    Shipping). Additionally managed and consulted on business development
                                    and technology investment.
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Graphic Designer</div>
                                    Concept to design for contracted large scale hospitality clients (e.g. suites
                                    and guestrooms, restaurants, spa, and casinos). Consultations follow
                                    through to end user including digital asset development, substrate and
                                    manufacturing materials. Design and development of Internal digital
                                    assets for sale to public and contractors. Design and development for set
                                    decorators and entertainment sector.
                                </div>
                            </li>
                        </ol>
                    </li>
                    <li className="list-group-item">
                        <h4>Craig Murray Productions</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Graphic Designer</div>
                                    Concept and finishing design for Film and Video key art campaigns used
                                    for a wide variety of print and web formats. Additionally designed visual
                                    and typographic layout for home entertainment products and POP display
                                    graphics. Additional responsibilities included working with production team
                                    to build and finalize press ready mechanicals.
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;