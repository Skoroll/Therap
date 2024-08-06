import React from 'react';
import "../styles/components/Office.scss"
import officePicture from "../assets/img/office.jpg"
const Office = () => {
  return (
    <div className='office'>
        <img src={officePicture} alt="Photo du cabinet"></img>
        <p>Mon cabinet est entièrement rénové pour vous accueillir dans le confort et le calme.</p>
    </div>
  );
};

export default Office;
