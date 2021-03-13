import React,{useState, useEffect} from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import youtube from './apis/youtube';
import VideosList from './components/VideosList';
import VideoDetail from './components/VideoDetail';

function App() {
  const[videos, setVideos]=useState([]);
  const[selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    getVideo('react.js')
  },[])

  const getVideo = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }  

  const clickedVideo = (e) => {    
    setSelectedVideo(e);
  }

  return (
    <div className="App">
      <div className='searchbar-container'>
        <h1>Video Player</h1>
        <Searchbar getVideo={getVideo}/>
      </div>
      <div className='videos-container'>
         <VideoDetail selectedVideo={selectedVideo} />
         <VideosList videos={videos} clickedVideo={clickedVideo}/> 
      </div>     
    </div>
  );
}

export default App;
