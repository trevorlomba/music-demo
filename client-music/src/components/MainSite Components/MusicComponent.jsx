import {React, useEffect, useState} from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MusicComponent.scss'; // Import the SCSS file here
import songs from '../../songs';

const MusicComponent = (
    {
        setSong,
        setSongId,
        songId,
        setSearchParams,
    }
) => {


    // // State hook for tracking whether the mouse is in the bottom quarter of the screen.
    // const [showCarousel, setShowCarousel] = useState(false);

    // // Event handler for mouse movement.
    // const handleMouseMove = (e) => {
    //     // Get the Y position of the mouse pointer
    //     const mouseY = e.clientY;
    //     // Determine the position representing the bottom quarter of the screen.
    //     const triggerPosition = window.innerHeight * 0.75;

    //     // Set the carousel to be visible when the mouse is in the bottom quarter of the screen.
    //     if (mouseY >= triggerPosition) {
    //         setShowCarousel(true);
    //     } else {
    //         setShowCarousel(false);
    //     }
    // };

    // // Set up the event listener for mousemove when the component is mounted.
    // // Clean up the event listener when the component is unmounted to avoid memory leaks.
    // useEffect(() => {
    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []); 


    const musicData = songs.map((song) => {
        return {
            name: song.title,
            link: song.data.songLink, // This assumes that songLink is the link to the actual song.
            albumArtwork: song.data.artwork, // This assumes that background is the link to the album artwork.
            path: song.data.path,
        };
    });

    const updateSong = (path) => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
        const songPath = path 

        const itemId = songs.findIndex((song) => song.data.path === songPath);
        // setSearchParams({song: songPath})
        setSong(songs[songId]);
        setSongId(itemId);
        console.log(itemId)

       ;
    
    }



    const location = useLocation();
    
    return (
        <div className="" id="">
            <div className="content">
                {/* Other content... */}
                <div className="view-content">
                    
                        <OwlCarousel
                            className={"owl-theme"}
                            loop={false}
                            margin={10}
                            nav={false}
                        >
                            {musicData.map((item, index) => (
                                <div key={index} className="item">
                                    <div className="musicwrapper">
                                        <span
                                            onClick={() => updateSong(item.path)} rel="noreferrer">
                                            <img
                                                className="albumartwork" loading="lazy" src={item.albumArtwork} alt={item.title} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    
                </div>
                {/* Other content... */}
            </div>
        </div>
    );
};

export default MusicComponent;
