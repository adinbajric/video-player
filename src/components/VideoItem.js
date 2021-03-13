import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, clickedVideo}) => {
    return(
        <div className='video-thumbnail' onClick={()=>clickedVideo(video)}>
            <img className='ui image' src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <h5>{video.snippet.title}</h5>            
        </div>
    )
}

export default VideoItem;