import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({selectedVideo}) => {
    if(!selectedVideo){
        return <div>Loading....</div>
    }    
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    
    return(
        <div className='videoplayer-container'>
            <div className='ui embed'>
                <iframe src={videoSrc} title='videoplayer' />
            </div>            
            <div className='ui segment'>
                <h3 className='ui header'>{selectedVideo.snippet.title}</h3>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;