import React from "react";
import '../style/video.css';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div className="heading">
            <h1>Search any things</h1>
        </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof video);
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} allowFullScreen title="Video player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;