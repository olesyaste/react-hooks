import React, {useRef, useEffect, useState} from 'react'

const ImageTogglerOnScroll = ({primaryImg, secondaryImg}) => {
    
    const imageRef = useRef(null);
    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    const [isLoading, setIsLoading] = useState(true);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return() => {
            window.removeEventListener("scroll", scrollHandler);
    }
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    }

    return (
        <img
        src={
            isLoading ? "data:image/gif;base64,R0lGODlhaQABAIAAAP///wAAACH5BAEAAAA" : inView ? secondaryImg : primaryImg
        } 
            style={{ "margin":"30px", "height":"500px", "width":"500px"}}
            alt="" ref={imageRef}
        />
    )
}

export default ImageTogglerOnScroll;
