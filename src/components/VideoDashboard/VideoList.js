import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoList = ({ videos }) => {
  return (
    <div>
      <h2>Your Videos</h2>
      {videos.map((video) => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <VideoPlayer src={`http://localhost:5000/videos/${video._id}`} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
