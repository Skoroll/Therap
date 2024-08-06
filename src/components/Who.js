import React from "react";
import "../styles/components/Who.scss";
import therapeutePhoto from "../assets/img/image.png";
const Who = () => {
  return (
    <div className="introduction">
      <h1>[Nom] [Prenom] thérapeute en [discipline]</h1>
      <div className="introduction_div">
        <div className="introduction_side introduction__text">
          <h2>Qui suis-je ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="introduction_side introduction__photo">
          <img src={therapeutePhoto} alt="Photo de moi"></img>
        </div>
      </div>
    </div>
  );
};

export default Who;
