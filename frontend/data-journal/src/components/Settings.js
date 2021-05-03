import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import ColorPalette from "../img/color_pallete.png"

import '../css/Settings.css';

const Settings = () => {
    $(document).ready(function () {
        /* Check the location of each desired element */
        $('.fade-in').each(async function (i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > top_of_object) {
                $(this).animate({ opacity: '1' }, 550);
            }
        });
        /* Every time the window is scrolled */
        $(window).scroll(async function () {
            /* Check the location of each desired element */
            $('.fade-in').each(function (i) {
                var top_of_object = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > top_of_object) {
                    $(this).animate({ opacity: '1' }, 350);
                }
            });
        });
    });
    return (
        <div className="settings">
            <SiteNavbar sticky="false" bg="transparent" />
            <div id="settings-body"></div>
            <div id="modul-body"></div>
            <h12>Oski Bear</h12>
            <h14>Joined on 4/15/21</h14>
            <h13 id="first-name">First Name</h13>
            <div id="first-name-box"></div>
            <Form id="first-name-form">
                <Form.Control placeholder="Oski"/>
            </Form>
            <h13 id="last-name">Last Name</h13>
            <div id="last-name-box"></div>
            <Form id="last-name-form">
                <Form.Control placeholder="Bear"/>
            </Form>
            <h13 id="email">Email</h13>
            <div id="email-box"></div>
            <Form id="email-form">
                <Form.Control placeholder="Oski"/>
            </Form>
            <h13 id="color">Color Palette</h13>
            <div id="color-palette">
                <img
                    src={ColorPalette}
                    alt="colors"
                    className="selectDisable"
                    style={{ width: "250px" }}
                />
            </div>
        </div>
    );
};

export default Settings;
