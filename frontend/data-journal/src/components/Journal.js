import React, { useEffect, useState, useRef } from 'react';
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

    let [journalEntries, setJournalEntries] = useState([]);
    let [selectedEntry, setSelectedEntry] = useState(null);
    let [searchString, setSearchString] = useState("");
    let refTitle = useRef(null);
    let refRating = useRef(null);
    let refDescription = useRef(null);

    function updateEntries() {
        $.get("http://localhost:8000/api/journal/list/", res => {
            setJournalEntries(res.map(entry => {
                return {
                    pk: entry.pk,
                    ...entry.fields
                }
            }))
        })
    }

    console.log(journalEntries);

    useEffect(updateEntries, [])

    function searchFunction(entry) {
        if (searchString == "") {
            return true;
        }
        return entry.title.toLowerCase().includes(searchString.toLowerCase()) || entry.entry.toLowerCase().includes(searchString.toLowerCase());
    }

    function newEntry() {
        $.post("http://localhost:8000/api/journal/add/", `{
            "title": "Untitled journal entry",
            "rating": 0,
            "entry": ""
        }`, res => {
            updateEntries();
        });
    }

    let selectedEntryData = journalEntries.filter(e => e.pk == selectedEntry);

    function selectEntry(id) {
        console.log(refTitle);
        selectedEntryData = journalEntries.find(e => e.pk == id);
        refTitle.current.value = selectedEntryData.title;
        refRating.current.value = selectedEntryData.rating;
        refDescription.current.value = selectedEntryData.entry;
        setSelectedEntry(id);
    }

    function updateEntry() {
        let title = refTitle.current.value;
        let rating = refRating.current.value;
        let description = refDescription.current.value;

        $.post("http://localhost:8000/api/journal/"+selectedEntry+"/", res => {
            $.post("http://localhost:8000/api/journal/add/", `{
                "title": "${title}",
                "rating": ${rating},
                "entry": "${description}"
            }`, res => {
                updateEntries();
            });
        });
    }

    function deleteEntry() {
        $.post("http://localhost:8000/api/journal/"+selectedEntry+"/", res => {
            updateEntries();
        });
    }

    let htmlEntries = journalEntries.filter(searchFunction).map(({ pk, title, rating, entry }, i) => 
        <Button className={"btn-light entry-button seq" + (i + 1)} onClick={() => selectEntry(pk)}><h13><b>{title}</b></h13></Button>
    );


    return (
        <div className="journal">
            <SiteNavbar sticky="false" bg="transparent" />
                <div id="journal-body">
                    <div id="search-box"></div>
                    <Form id="search-form">
                        <Form.Control placeholder="Search Journal" onChange={evt => setSearchString(evt.target.value)}/>
                    </Form>
                    <Button className="btn-light new-button rounded-pill" onClick={newEntry}><h12>+ New Entry</h12></Button>
                    <div id="entries">
                        {htmlEntries}
                    </div>
                    <h14></h14>
                    <div id="title-box"></div>
                    <Form id="title-form">
                        <Form.Control placeholder="Enter Title Here" ref={refTitle}/>
                    </Form>
                    <div id ="rating-box"></div>
                    <Form id="rating-form">
                        <Form.Control placeholder="   /10" ref={refRating}/>
                    </Form>
                    <div id="message-box"></div>
                    <Form id="message-form">
                        <Form.Control placeholder="" ref={refDescription}/>
                    </Form>
                    <Button className="btn-light save-button rounded-pill" onClick={updateEntry}>
                        Save
                    </Button>
                    <Button className="btn-light save-button rounded-pill" style={{marginLeft: "200px"}} onClick={deleteEntry}>
                        Delete
                    </Button>
                </div>
        </div>
    );
};

export default Journal;
