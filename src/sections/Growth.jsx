import React from 'react';

import "../styles/Growth.css";

// IMAGES
import SocialImage from "../assets/growth_image/social.png";
import SingleWomenTable from "../assets/growth_image/single_women_table.png";
import MeetingImage from "../assets/growth_image/meeting.png";

const Growth = () => {

    const SocialImageStyle = {
        backgroundImage: `url(${SocialImage})`,
    }

    return (
        <>

            <div id="grow-main">
                <div id="grow-title">
                    <h2 id="grow-title-h2">Unlocking career growth for <br />job seekers</h2>
                </div>

                <div id="grow-content">
                    <div id="grow-content-box1">
                        <div id="grow-content-box1-card1" style={SocialImageStyle}>
                            <div id="grow-content-box1-card1-title">
                                <h3 id="grow-content-box1-card1-h3">More than 300</h3>
                                <p id="grow-content-box1-card1-p">Companies listed us</p>
                            </div>
                        </div>

                        <div id="grow-content-box1-card2">
                            <img id="grow-content-box1-card2-img" src={SingleWomenTable} alt="single_women_image" />
                        </div>
                    </div>

                    <div id="grow-content-box2">
                        <div id="grow-content-box2-card1">
                            <img id="grow-content-box2-card1-img" src={MeetingImage} alt="meeting_image" />
                        </div>
                        <div id="grow-content-box2-card2">
                            <div id="grow-content-box2-card2-content">
                                <h3 id="grow-content-box2-card2-h3">5,000 &<br /> growing</h3>
                                <p id="grow-content-box2-card2-p">Community members</p>
                            </div>
                        </div>
                        <div id="grow-content-box2-card3">
                            <div id="grow-content-box2-card3-content">
                                <h3 id="grow-content-box2-card3-h3">1,000 +</h3>
                                <p id="grow-content-box2-card3-p">Folks placed till date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Growth