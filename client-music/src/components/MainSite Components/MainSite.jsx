import {React, useRef, useEffect} from "react";
import "./MainSite.scss";
import Navbar from "./Navbar";
import MusicInline from "./MusicInline"
import Bio from "./Bio";
import banner from '../../assets/hurtyoubanner.jpg'
import songs from "../../songs";

function MainSite({songId, song}) {


    

    return (
        <div  className="body template-index page-section">

            <div className="navbar-logo-center">
                {/* <Navbar /> */}
            </div>
                        

            <div id="about" className="bio-section">
                {/* <Bio />  */}
            </div>
            <div id="music" className="music-section ">
                <MusicInline 
                    songId={songId}
                    song={song}
                />

                

            </div>
            <div id="videos" className="videos-section">
                {/* Videos section */}
            </div>
            <div id="shop" className="shop-section">
                {/* Shop section */}
            </div>
            <div id="socials" className="socials-section">
                {/* Socials section */}
            </div>
        </div>
    );
}

export default MainSite