import {React, useRef, useEffect} from 'react'; // 'useEffect' and 'useState' are not used in the current component, so I removed them.
import { useLocation } from 'react-router-dom'; // 'NavLink' is not used, so I removed it.
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MusicInline.scss';
import songs from '../../songs';

const MusicInline = ({songId, song}) => {
    const location = useLocation(); // If you're planning to use 'location', you can keep this.

    const carouselRef = useRef();

    // const song = songs ? songs[songId] : songs[0]

    useEffect(() => {
        if (carouselRef.current) {
            // 'to' is a method provided by Owl Carousel to go to a specific item
            // The index is 0-based, so ensure your songId is compatible with this
            carouselRef.current.to(songId); // This moves the carousel to the specific index
        }
    }, [songId]); // This effect triggers every time songId changes

    if (!song) {
        return null; // If there's no song, don't render anything.
    }
    // I assume each 'song' object in your 'songs' array has a 'banner', 'data', and other properties.
    return (
        // <div className= 'inline-owl'>
        // <OwlCarousel
        //         ref={carouselRef} 
        //         className="owl-theme "
        //     loop
        //     margin={10}
        //     nav
        //     items={1}  // Display only one item (song container) at a time
        //     dots={false}
        // >
        
        //     {/* Iterate over the songs array and create a container for each song. */}
        //     {songs.map((song, index) => (
        //         <div key={index} className="music-container" style={{ backgroundImage: `url(${song.data.banner})` }}>
        //             <div className="artwork-container">
        //                 <img className="album-art" src={song.data.artwork} alt={`${song.title} Album Artwork`} />
        //             </div>
        //             <div className="info-container">
        //                 <h1 className="main-header">{song.title} by {song.artist}</h1> 
        //                 <h2 className="sub-header">STREAMING EVERYWHERE</h2>
        //                 <div className="icon-row">

        //                     {song.data.featuredLinks.map((link, linkIndex) => (
        //                         <div className="icon-container" key={linkIndex}
        //                             onClick={() => {
        //                                 window.open(`${link.link}`, '_blank')
        //                             }}>
        //                             <div className="icon">{link.img}</div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </OwlCarousel>
        // </div>

        <div className="music-container" style={{ backgroundImage: `url(${song.data.banner})` }}>
            <div className="artwork-container">
                <img className="album-art" src={song.data.artwork} alt={`${song.title} Album Artwork`} />
            </div>
            <div className="info-container">
                <h1 className="main-header">{song.title} by {song.artist}</h1>
                <h2 className="sub-header">STREAMING EVERYWHERE</h2>
                <div className={`icon-row $`}>

                    {song.data.featuredLinks.map((link, linkIndex) => (
                        <div className={`icon-container  ${link.tag}`} key={linkIndex}
                            onClick={() => {
                                window.open(`${link.link}`, '_blank')
                            }}>
                            <div className={`icon`}>{link.img}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MusicInline;
