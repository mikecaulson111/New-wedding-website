import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const buttons = ["Home", "Our Story", "FAQ", "Travel & Venue", "RSVP"];
const navs    = ["/",    "our-story", "faq", "travel-venue",   "rsvp"];

export default function Header() {
    const navigate = useNavigate();

    const handleButtonClick = (name) => {
        for (var i = 0; i < buttons.length; i++) {
            if (name === buttons[i]) {
                navigate(navs[i]);
                return;
            }
        }
        navigate("/");
    }

    return (
        <nav className="header-nav">
            {buttons.map((name) => (
                <button key={name} className="nav-button" onClick={() => handleButtonClick(name)}>
                    {name}
                </button>
            ))}
        </nav>
    )
}
