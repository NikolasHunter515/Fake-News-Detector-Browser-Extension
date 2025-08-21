import React from "react";
import ReactDOM from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser, faGear, faCircleHalfStroke, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

//TODO change this layout, move the settings and light/dark to top of page.
export default function ToolBar(){
    let startVal = false;
    if(localStorage.getItem('detectTogg')){
        startVal = localStorage.getItem('detectTogg');
    }
    const [detect, setDetect] = useState(startVal);

    const toggleDetect = () => {
        setDetect(!detect);
        localStorage.setItem('detectTogg', detect);
        console.log(detect);
    }

    return(
        <div className="justify-content-center">
            <nav className="navbar navbar-expand-sm bg-light fixed-bottom">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <FontAwesomeIcon icon={faHouseChimneyUser} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <button onClick={toggleDetect} className="nav-link">
                                <FontAwesomeIcon icon={faPowerOff} />
                            </button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <FontAwesomeIcon icon={faCircleHalfStroke} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faGear} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}