import React from "react";
import "./VideoFrame.css";
import 'antd/dist/antd.css';


const Videoiframe = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className=" video-item item">
      <img
        className="image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
     <div></div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Videoiframe;
