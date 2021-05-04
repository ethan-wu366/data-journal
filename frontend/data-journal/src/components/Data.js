import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import Plot from 'react-plotly.js';

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

    let [journalEntries, setJournalEntries] = useState([]);
    let [wordSearch, setWordSearch] = useState("");

    useEffect(() => {
        $.get("http://localhost:8000/api/journal/list/", res => {
            setJournalEntries(res.map(entry => {
                return {
                    pk: entry.pk,
                    ...entry.fields
                }
            }))
        })
    }, []);

    console.log(journalEntries);

    let averageRating = journalEntries.reduce((cum, entry) => {
        return cum + entry.rating;
    }, 0) / journalEntries.length;

    function searchFunction(entry) {
        if (wordSearch == "") {
            return true;
        }
        return entry.title.toLowerCase().includes(wordSearch.toLowerCase()) || entry.entry.toLowerCase().includes(wordSearch.toLowerCase());
    }

    let averageRatingWord = journalEntries.filter(searchFunction).reduce((cum, entry) => {
        return cum + entry.rating;
    }, 0) / journalEntries.filter(searchFunction).length;

    return (
        <div>
            <SiteNavbar sticky="false" bg="transparent" />
            <div id="data-body">
                <div id="graph">
                    <h3 id="data-title">Data Analytics</h3>
                    <Plot id="placeholder"
                        data={[
                        {
                            x: [...journalEntries.map((a, i) => i)],
                            y: [...journalEntries.map(a => a.rating)],
                            type: 'scatter',
                            mode: 'markers',
                            marker: {color: 'red'},
                        },
                        ]}
                        layout={ {width: 720, height: 540, title: 'A Fancy Plot'} }
                    />
                </div>
                <div id="search">
                    <p id="average-day">Your average day has a rating of <b>{averageRating}</b></p>
                    <Form id="search-form">
                        <Form.Control placeholder="Search a word" onChange={evt => setWordSearch(evt.target.value)}/>
                    </Form>
                    {
                        [wordSearch != "" ? <p id="average-word">Your average rating for <b>{wordSearch}</b> is {averageRatingWord}</p> : <p id="average-word">Search!</p>]
                    }
                </div>
            </div>
        </div>
    );
};

export default Data;
