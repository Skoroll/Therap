import React from "react";
import SignupForm from "../components/SignUpForm";
import "../styles/pages/SignUp.scss"

function SignUp(){
    return(
        <main>
            <h2>Créer un compte</h2>
            <SignupForm />

            <h3>Pourquoi créer un compte ?</h3>
            <p>En créant un compte vous pourrez recevoir des information sur ma pratique, des communications voir des offres spéciale.</p>
            <p>De plus, il est obligatoire d'avoir un compte sur mon site pour prendre RDV.</p>
        </main>
    );
}

export default SignUp