import React from "react";
import "../styles/pages/RDV.scss"
import Banner from "../components/Banner";
import office from "../assets/img/office.jpg"
import { useEffect } from "react";

function RDV(){
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return(
        <main>

            <h2>Prendre RDV</h2>
            <form>
                <div className="Lname label_form">
                <label for="Lname">Nom</label>
                <input type="text" id="Lname"></input>
                </div>
                <div className="Fname label_form">
                <label for="Fname">Prénom</label>
                <input type="text" id="Fname"></input>
                </div>
                <div className="date">
                    <label for="date">Date</label>
                    <input type="date" id="date"></input>
                </div>
                <div className="hour">
                    <label for="hour">Heure</label>
                    <input type="time"></input>
                </div>

                <button type="submit">Ok</button>
            </form>
        </main>
    );
}

export default RDV