import React from "react"
import { useHistory } from "react-router";
import "./EventCard.css"

// this is a component
export const EventCard = ({ event, handleDeleteEvent }) => {
    const history = useHistory();
  
    return (
        <>
            <div className="card_event">
                <div className="card_content_event">

                    <picture >
                        {/* animal."" accesses the property being called | animal.image is displaying the animal image*/}
                        {event.image != "" ? <img className="event-image" src={`../../images/${event.image}`} alt="Zoo picture" /> : <p>There isn't an image.</p>}
                    </picture>
                    <h6 className="card-event-name">Event Name :    {event.name}</h6>
                    <p>At :  {event.location.name}</p>
                    <p className= "event_description"> What is this event?  {event.description} </p>
                    <p className="event_date"> {event.date} </p>
                    <button className="edit_button" type="button" onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteEvent(event.id)}>Remove this event</button>
                </div>
            </div>
        </>
    );
}