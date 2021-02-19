import React from 'react';
import ImageTogglerOnMouseOver from '../src/ImageTogglerOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageTogglerOnMouseOver primaryImg="/static/speakers/bw/image-1.jpg" 
                                    secondaryImg="/static/speakers/image-1.jpg"
                                    alt='' 
                                    />
            &nbsp; &nbsp; &nbsp; 
            <ImageTogglerOnMouseOver primaryImg="/static/speakers/bw/image-2.jpg"
                                    secondaryImg="/static/speakers/image-2.jpg"
                                    alt='' />
        </div>
    )
}


export default ImageChangeOnMouseOver;
