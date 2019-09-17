// list of related to searched youtube videos

import React from 'react';
import Videoiframe from './VideoIframe';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <Videoiframe key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;