import React from "react";
import "./MainSite.scss";
import Navbar from "./Navbar";
import MusicComponent from "./MusicComponent";

function MainSite() {
    return (
        <div className="body template-index">

            <div className="navbar-logo-center">
                <Navbar />
            </div>
            <div>
                <img
                    src="https://i1.sndcdn.com/avatars-8YU3lPu1zcllR43B-LBaR6A-t500x500.jpg" // URL of the logoImage
                    loading="lazy"
                    alt="Main site featured" // It's recommended to provide meaningful alternative text for accessibility.
                    className="image-4"
                />  {/* This is the logo image */}
                {/* Rest of the content */}
            </div>                      

            <div id="music" className="music-section">
            </div>
            <div id="videos" className="videos-section">
                {/* Videos section */}
            </div>
            <div id="shop" className="shop-section">
                {/* Shop section */}
            </div>
            <div id="bio" className="bio-section">
                {/* Bio section */}
            </div>
            <div id="socials" className="socials-section">
                {/* Socials section */}
            </div>
        </div>
    );
}

export default MainSite