import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents , deleteEvent } from './EventManager';
import "./EventCard.css"
import { useHistory } from 'react-router'
import logo from "../../images/lightsatzoo.jpeg"

export const EventList = () => {

    const [events, setEvents] = useState([]);

    const history = useHistory();

    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };

    const handleDeleteEvent = id => {
        deleteEvent(id)
            .then(() => getAllEvents().then(setEvents));
    };

    useEffect(() => {
        console.log("useEffect running")
        getEvents();
    }, []);

    return (
        <>
        <h2 className="events_header"> Welcome to the Zoo Adventures nts page ! Here you can find events happening at any of our local zoos and what the event will consist off. Feel free to add any new events to the list using the "add new eventwn belo</h2>
        <img className="logo-logo-logo" src={logo} alt="logo"></img>
            <section className="section-content">
                <button type="button"
                    className="new-event-button"
                    onClick={() => {history.push("/events/create")}}>
                    Create new Event Card
                </button>
            </section>
            <div className="container-cards-events">
                {events.map(event => <EventCard key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />
                )}
            </div>
        </>
    );
};