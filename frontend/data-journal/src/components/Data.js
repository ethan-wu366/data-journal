import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

import '../css/Data.css';
import ChartPlaceholder from '../img/chart_placeholder.jpg';

const Data = () => {
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
            <div id="data-body">
                <div id="graph">
                    <h3 id="data-title">Data Analytics</h3>
                    <img id="placeholder" src={ChartPlaceholder} alt="chart placeholder"></img>
                </div>
                <div id="search">
                    <p id="average-day">Your average day has a rating of <b>7.2</b></p>
                    <Form id="search-form">
                        <Form.Control placeholder="Search a word"/>
                    </Form>
                    <p id="average-word">Your average rating for <b>swim</b> is 4.2</p>
                </div>
            </div>
        </div>
    );
};

export default Data;
