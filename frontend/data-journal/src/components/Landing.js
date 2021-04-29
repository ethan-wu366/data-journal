import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import '../css/Landing.css';
// import Background from '../img/landing_background.jpg';

const Landing = () => {
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
        <div>
            <SiteNavbar sticky="false" bg="transparent" />
            <div id="landing-background">
                <div id="info-container">
                    <p>Gain valuable</p>
                    <p>insights to your</p>
                    <p>journaling</p>
                    {/* <h3>Gain valuable insights to your journaling</h3> */}
                    <Button style={{backgroundColor: "#1F5673"}} href="/journal">Sign up today</Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
