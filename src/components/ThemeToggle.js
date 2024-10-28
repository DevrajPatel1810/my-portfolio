import React from 'react';
import { TiAdjustBrightness } from "react-icons/ti"
import { PiMoonFill } from "react-icons/pi"
import '../styles/ThemeToggle.css';

function ThemeToggle({ toggleTheme }) {
    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            <TiAdjustBrightness className="sun-icon" />
            <PiMoonFill className="moon-icon" />
        </button>
    );
}

export default ThemeToggle;
