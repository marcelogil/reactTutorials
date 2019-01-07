import axios from 'axios';

const KEY = 'AIzaSyDeu1rrcVV3-cIq0FuqXR7f_ZrXL9zxkpU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});