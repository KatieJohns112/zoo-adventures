import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useHistory } from "react-router";

export const NavBar = ( props ) => {
    
const history = useHistory();  
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
                <li className="nav__item">
                     <button className="nav__button" onClick={() => {
                       sessionStorage.removeItem("app_user_id");
                          history.push("/login")
                      }}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}