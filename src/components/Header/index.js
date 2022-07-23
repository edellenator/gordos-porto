import React from "react";
import Navigation from '../Navigation';
import {
    Nav, 
    Navbar, 
    Container,
    Col
} from 'react-bootstrap'

const Header = () => {
    return (
        <Container className="sticky-top">
            <Navbar className="justify-content-between mb-3" bg='light'>
                <Col>
                    <h2 className="display-2">
                        Erik Dell
                    </h2>
                </Col>
                <Col>
                    <Navigation
                    />
                </Col>
            </Navbar>
        </Container>
    );
}

export default Header;