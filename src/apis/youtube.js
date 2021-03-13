import Axios from 'axios';

const KEY = 'AIzaSyDqw57HXfjqt6oaqgaGF5E-q_u_qmAJ2Fo';

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
        
    }
})