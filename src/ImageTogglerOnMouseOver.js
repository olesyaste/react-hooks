import React, {useRef} from 'react'

const ImageTogglerOnMouseOver = ({primaryImg, secondaryImg}) => {
    
    const imageRef = useRef(null);

    return (
        <img style={{"margin": "10px", "height": "500px", "width": "500px" }} onMouseOver={() => {
            imageRef.current.src = secondaryImg;
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }}
            src = {primaryImg}
            alt="" ref={imageRef}
        />
    )
}

export default ImageTogglerOnMouseOver;
