import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents , deleteEvent } from './EventManager';
import "./EventCard.css"
import { useHistory } from 'react-router'
import logo from "../../images/zoo-lantern-1200x600.jpg"

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
      
      
        <h2 className="events"> Zoo Events for the whole family ! Discover fun events for both adults and children alike happening at your local zoos. Feel free to add a new event you've heard about using our "add new event" feature below. All zoo events that have been submitted can be found below in the events list. Each zoo name is displayed on each card to make navigating to your favorite zoos for events easy. We hope to see you and your family there !</h2>
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