// api request code
import axios from 'axios';

const KEY = 'AIzaSyCRvUzPBwcZolDk9WDLUjym--ug3CUxaJU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

