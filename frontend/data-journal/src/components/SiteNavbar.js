import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavbarLogo from '../img/navbar-logo.png';
import LandingLogo from '../img/Landing_Logo.png';

const SiteNavbar = (props) => {

    return (
        <Navbar
            expand="lg"
            style={{
                padding: '.2rem 2rem .2rem 2rem',
                minHeight: '7vh',
                background: '#A6CFD5',
            }}
            variant="dark"
            className="siteNavbar text-center"
            id="siteNavbar"
        >
            <Navbar.Brand>
                <a href="/">
                    <img
                        src={LandingLogo}
                        alt="navbar logo"
                        className="selectDisable"
                        style={{
                            width: '17rem',
                        }}
                    />
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
        fontSize: '20px',
    },
};

export default SiteNavbar;
