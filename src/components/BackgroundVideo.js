import React from "react";
const images = require.context('../img', true);

const BackgroundVideo = (props) => {
    let imgSrc1 = images('./Love-Coding.mp4');
    let imgSrc2 = images('./Love-Coding.webm');
    return (
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={imgSrc1} type="video/mp4" />
                <source src={imgSrc2} type="video/webm" />
                Your browser is not supported
            </video>
        </div>
    )
};

export default BackgroundVideo;
