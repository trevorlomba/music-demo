import React from 'react';


const Bio = () => {
    return (
        <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center'}}>
            <img src="https://i1.sndcdn.com/avatars-8YU3lPu1zcllR43B-LBaR6A-t500x500.jpg" alt="Profile" style={{  }} className='bio-img' />
            <div style={{ width: '50%' }}>
                <h2 className = "bio-title">LXVI</h2>
                <p className="bio-text">Born and bred on Cape Cod, MA, LXVI's talent for melody and distinctive voice garnered attention in the Boston music circuit, quickly leading to sold out shows in Boston and even him sharing the stage with Machine Gun Kelly at Pufferbellies in Providence. However, it was his soul-stirring track "Hurt You" that truly marked his arrival on the  music scene in 2019. Going viral almost overnight, "Hurt You" remains an anthem for many and opened doors for LXVI to move to the City of Angels, Los Angeles, where he is now in high demand as a songwriter and studio musician, collaborating with major label artists and top-tier producers.</p>
            </div>
        </div>
    );
};

export default Bio;
