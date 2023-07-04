import React from 'react'
import "../styles/LandingPage.css";

import GoogleLogo from "../assets/google_logo.webp";

const LandingPage = () => {
  return (
    <>
        <div id="land-main">
            <div id="land-content">
                <h1 id="land-h1">Don’t be reactive, join <br/> <span id="land-h1-span">Proactivist</span></h1>
                <p id="land-p">A professional community where you reach new heights in you career by lifting each other.</p>

                <div id="land-googleAuth">
                    <img id="land-google-img" src={GoogleLogo} alt="google_logo" />
                    <p id="land-google-p">Continue with Google</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage