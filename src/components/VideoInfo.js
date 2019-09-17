// small description unit of video playing same width as video above it

import React from 'react';
import 'antd/dist/antd.css';

const VideoInfo = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className=''>
                <h4 className='header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoInfo;