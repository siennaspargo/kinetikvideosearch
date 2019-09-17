// list of related to searched youtube videos

import React from 'react';
import Videoiframe from './VideoIframe';
import 'antd/dist/antd.css';
import { List, Typography } from 'antd';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <Videoiframe key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div>
    <List size ="large"
    bordered
    dataSource={renderedVideos}
    renderItem={item => <List.Item>{item}</List.Item>}
    ><div></div></List>
</div>
};
export default VideoList;