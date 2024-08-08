import React from "react";
import toolOneImg from "../assets/img/tools/360_F_290467220_QYbl6cZsSN4IjCogtTidTgfAI3E87ZUN.jpg";
import toolTwoImg from "../assets/img/tools/depositphotos_514326402-stock-photo-professional-therapist-listening-his-patient.jpg";
import toolThreeImg from "../assets/img/tools/structure-of-human-brain-section-schematic-vector-6795387.jpg";
import toolFourImg from "../assets/img/tools/images.jpeg"

function ToolImages({ version }) {
    let selectedImage;

    switch (version) {
        case 'one':
            selectedImage = toolOneImg;
            break;
        case 'two':
            selectedImage = toolTwoImg;
            break;
        case 'three':
            selectedImage = toolThreeImg;
            break;
        case 'four' :
            selectedImage = toolFourImg;
            break
        default:
            selectedImage = toolOneImg; // Valeur par défaut
    }

    return (
        <div className="tool_images">
            <img src={selectedImage} alt={`Tool Version ${version}`} />
        </div>
    );
}

export default ToolImages;
