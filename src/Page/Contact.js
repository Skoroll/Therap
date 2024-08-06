import React from "react";
import Location from "../components/Location";
import "../styles/pages/Contact.scss"
import plane from "../assets/img/banner/1000_F_378543678_OyN8AGlXX5M8lQVCt2rMEO2XmukIe6es.jpg"; 
import { Link, useNavigate } from 'react-router-dom';
import Banner from "../components/Banner";
import { useEffect } from "react";

function Contact(){
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    const bannerImages = [{ src: plane, alt: "Books banner" }];
    return(

        <main>
            <h2>Contacts</h2>
            <Banner images={bannerImages} />
            <p className="no_RDV">Pour toutes prise de rendez-vous, veuillez passer par <span className="no_RDV__link"> <Link to="/rdv">cette page</Link></span></p>
            <div className="contacts">
                <div className="contacts__inside contacts__phone">
                    <h2>Téléphone</h2>
                    <p>00 00 00 00 00</p>
                    <p>Uniquement pour prévenir de retards ou d'empèchement de dernière minute</p>
                </div>
                <div className="contacts__inside contacts__e-mail">
                    <h2>E-mail</h2>
                    <p>email@email.com</p>
                    <p>Pour toutes questions, sauf prise de RDV. Je met en général 1 à 2 jours à répondre. </p>
                </div>

</div>
            <Location />
        </main>

    );
}

export default Contact