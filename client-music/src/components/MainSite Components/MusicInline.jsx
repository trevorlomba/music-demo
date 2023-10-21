import React from 'react'; // 'useEffect' and 'useState' are not used in the current component, so I removed them.
import { useLocation } from 'react-router-dom'; // 'NavLink' is not used, so I removed it.
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MusicInline.scss';
import songs from '../../songs';

const MusicInline = () => {
    const location = useLocation(); // If you're planning to use 'location', you can keep this.

    // I assume each 'song' object in your 'songs' array has a 'banner', 'data', and other properties.
    return (
        <div className= 'inline-owl'>
        <OwlCarousel
                className="owl-theme "
            loop
            margin={10}
            nav
            items={1}  // Display only one item (song container) at a time
            dots={false}
        >
        
            {/* Iterate over the songs array and create a container for each song. */}
            {songs.map((song, index) => (
                <div key={index} className="music-container" style={{ backgroundImage: `url(${song.data.banner})` }}>
                    <div className="artwork-container">
                        {/* I assume 'artwork' is a URL to an image. Replace with your actual structure if it's different. */}
                        <img className="album-art" src={song.data.artwork} alt={`${song.title} Album Artwork`} />
                    </div>
                    <div className="info-container">
                        <h1 className="main-header">{song.title} by {song.artist}</h1> {/* Replace with actual property names for song title and artist. */}
                        <h2 className="sub-header">STREAMING EVERYWHERE</h2>
                        <div className="icon-row">
                            {/* I assume 'featuredLinks' is an array of objects with 'img' being an element or URL. */}
                            {song.data.featuredLinks.map((link, linkIndex) => (
                                <div className="icon-container" key={linkIndex}
                                    onClick={() => {
                                        window.open(`${link.link}`, '_blank')
                                    }}>
                                    <div className="icon">{link.img}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
        </div>
    );
};

export default MusicInline;
