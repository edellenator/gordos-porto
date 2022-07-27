import React from "react";
import {
    Nav, 
    Navbar, 
    Container,
    Col
} from 'react-bootstrap'
import { act } from "react-dom/test-utils";

const Header = (props) => {
    const {navItems = [], activeNavItem, setActiveNavItem} = props
    return (
        <Container className="sticky-top">
            <Navbar className="justify-content-between mb-3" bg='light'>
                <Col>
                    <h2 className="display-2">
                        Erik Dell
                    </h2>
                </Col>
                <Col>
                    <nav>
                        <div className="d-flex flex-row">
                        {navItems.map((navItem) => (
                            <button 
                                className={`nav-button h3 border border-0 text-center flex-fill m-3
                                    ${
                                        activeNavItem === navItem ? 'btn bg-dark text-light font-weight-bold' : 'btn btn-light text-dark'
                                    }`}
                                key={navItem}
                            >
                                <span onClick={() => setActiveNavItem(navItem)}>{navItem}</span>
                            </button>

                        ))}
                        </div>
                    </nav>
                </Col>
            </Navbar>
        </Container>
    );
}

export default Header;