import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


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
        <div className="journal">
            <SiteNavbar sticky="false" bg="transparent" />
                <div id="journal-body">
                    <div id="search-box"></div>
                    <Form id="search-form">
                        <Form.Control placeholder="Search Journal"/>
                    </Form>
                    <Button className="btn-light new-button rounded-pill" href="/journal"><h12>+ New Entry</h12></Button>
                    <Button className="btn-light entry-button seq1" href="/journal"><h13><b>Yay 420</b></h13></Button>
                    <Button className="btn-light entry-button seq2" href="/journal"><h12><b>I am sad today</b></h12></Button>
                    <h14></h14>
                    <div id="title-box"></div>
                    <Form id="title-form">
                        <Form.Control placeholder="Enter Title Here"/>
                    </Form>
                    <div id ="rating-box"></div>
                    <Form id="rating-form">
                        <Form.Control placeholder="   /10"/>
                    </Form>
                    <div id="message-box"></div>
                    <Form id="message-form">
                        <Form.Control placeholder=""/>
                    </Form>
                    <Button className="btn-light save-button rounded-pill">
                        Save
                    </Button>
                </div>
        </div>
    );
};

export default Journal;
