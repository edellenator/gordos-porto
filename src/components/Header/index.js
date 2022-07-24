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
                        <ul className="list-group list-group-horizontal rounded-0">
                        {navItems.map((navItem) => (
                            <li 
                                className={`nav-button h3 border border-0 text-center list-group-item list-group-item-action flex-fill 
                                    ${
                                        activeNavItem === navItem ? 'bg-dark text-light' : 'bg-light text-dark'
                                    }`}
                                key={navItem}
                            >
                                <span onClick={() => setActiveNavItem(navItem)}>{navItem}</span>
                            </li>

                        ))}
                        </ul>
                    </nav>
                </Col>
            </Navbar>
        </Container>
    );
}

export default Header;