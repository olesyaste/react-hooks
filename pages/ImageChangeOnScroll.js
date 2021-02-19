import React, {useState, useEffect} from 'react';
import ImageTogglerOnScroll from '../src/ImageTogglerOnScroll';

const ImageChangeOnScroll = () => {
    const [currentImageId, setCurrentImageId] = useState(0);
    const [mouseEventCnt, setMouseEventCnt] = useState(0);

    useEffect(() => {
        window.document.title = `ImageId: ${currentImageId}`;
        console.log(`useEffect: setting title to ${currentImageId}`)
    },[currentImageId])

    return (
        <div>
            <span>mouseEventCnt: {mouseEventCnt}</span>
            {[1, 2, 3, 4].map((imageId) => {
                return (
                    <div key={imageId}
                        onMouseOver={()=> {
                            setCurrentImageId(imageId);
                            setMouseEventCnt(mouseEventCnt +1);
                            console.log(`onMouseOver:${imageId}`);
                        }}>
                        <ImageTogglerOnScroll
                        primaryImg={`/static/speakers/bw/image-${imageId}.jpg`}
                        secondaryImg={`/static/speakers/image-${imageId}.jpg`}
                        alt=""
                        />
                    </div>
                );
            })}
        </div>
      
    )
}


export default ImageChangeOnScroll;
