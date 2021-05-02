import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import '../css/Journal.css';

const Journal = () => {
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
            <body>
                <h1>help</h1>
                <Button class="btn-primary btn-xl rounded-pill" href="/journal"><h12>+ New Entry</h12></Button>
                <Button class="btn-primary btn-xl rounded-pill" href="/journal"><h13><b>Yay 420</b></h13></Button>
                <Button class="btn-primary btn-xl rounded-pill" href="/journal"><h12><b>I am sad today</b></h12></Button>
                <div class="form-outline w-25 mb-4">
                    <textarea class="form-control" id="textAreaExample4" rows="3"></textarea>
                    <label class="form-label" for="textAreaExample4">25% width of the parent</label>
                </div>
                <textarea class="form-control" rows="1" id="comment"></textarea>
                <label class="form-label" for="textAreaExample">Message</label>
            </body>
        </div>
    );
};

export default Journal;
