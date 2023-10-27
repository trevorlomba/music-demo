import React, { useState } from 'react';

const LoadingImage = ({ src, alt, ...props }) => {
    const [loaded, setLoaded] = useState(true);

    return (
        <div style={{ position: 'relative' }}>
           
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    Loading...
                </div>
            
        </div>
    );
};

export default LoadingImage;