import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavbarLogo from '../img/navbar-logo.png';

const SiteNavbar = (props) => {

    return (
        <Navbar
            expand="lg"
            style={{
                padding: '.8rem 2rem .8rem 2rem',
                minHeight: '10vh',
                background: '#A6CFD5',
            }}
            variant="dark"
            className="siteNavbar text-center"
            id="siteNavbar"
        >
            <Navbar.Brand>
                <a href="/">
                    <img
                        src={NavbarLogo}
                        alt="navbar logo"
                        className="selectDisable"
                        style={{
                            width: '4rem',
                        }}
                    />
                    <p style={style.NavText}>Data Journal</p>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <a href="/journal">
                        <p style={style.NavText}>Journal</p>
                    </a>
                    <a href="/data">
                        <p style={style.NavText}>Data</p>
                    </a>
                
                    <a href="/settings">
                        <p style={style.NavText}>Oski</p>
                    </a>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const style = {
    NavText: {
        fontFamily: 'Titillium Web',
        margin: '0 1rem',
        fontSize: '22px',
    },
};

export default SiteNavbar;
