import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = ( props ) => {
    return (
        <nav className="navbar">
            <ul className="navbar_items">
                <li className="nav_item">
                    < Link className="nav_link" to="/">Home</Link>
                </li>
                <li className="nav_item">
                    < Link className="nav_link" to="/animals">Animal List</Link>
                </li>
                <li className="nav_item">
                    < Link className="nav_link" to="/events">Events</Link>
                </li>
                <li className="nav_item">
                    < Link className="nav_link" to="/locations">Zoo Locations</Link>
                </li>
                <li className="nav_item">
                    < Link className="nav_link" to="/reviews">Reviews</Link>
                </li>
            </ul>
        </nav>
    )
}