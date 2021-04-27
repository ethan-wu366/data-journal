import React from "react";

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
                background: '#1c1c1c',
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
                </a>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <a href="/about">
                        <p style={style.NavText}>About</p>
                    </a>
                    <a href="/team">
                        <p style={style.NavText}>Team</p>
                    </a>
                    <a
                        href="https://evberkeleyblog.weebly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p style={style.NavText}>Blog</p>
                    </a>
                    <a href="/sponsors">
                        <p style={style.NavText}>Sponsors</p>
                    </a>
                    <a href="/join">
                        <p style={style.NavText}>Join Us</p>
                    </a>
                    <a href="mailto: berkeleyformulae@gmail.com">
                        <p style={style.NavText}>Contact</p>
                    </a>
                    <a href="https://give.berkeley.edu/egiving/index.cfm?fund=FU1349000">
                        <p style={style.NavText}>Donate</p>
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
