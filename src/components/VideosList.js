import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideosList = ({videos, clickedVideo}) => {    
    return(
        <div className = 'videoslist-container'>
            {videos.map(video => {
                 return <div><VideoItem video={video} clickedVideo={clickedVideo}/> </div>
                  }
            )}
        </div>
    )
}

export default VideosList;