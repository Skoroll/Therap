import React from "react";
import mapImage from "../assets/img/map.png";
import '../styles/components/Location.scss'

function Location() {
    return (
        <div className="location">
            <div className="location__txt location__side">
            <h2>Où se situe le cabinet ?</h2>
            <p>Le cabinet se situe à [adresse], pour y accéder il suffit de [précision]</p>
            <p>Un parking gratuit se situe devant les locaux.</p>
            </div>

            <div className="location__map location__side">
            <h2>Carte d'accès au cabinet</h2>
            <img src={mapImage} alt="adresse" />
            </div>
        </div>
    );
}

export default Location;
