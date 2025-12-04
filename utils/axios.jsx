import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjEwNGQ1MWQ1NWIwOGZlNjUxZjc0ZjFlYzFkNDE4YiIsIm5iZiI6MTczOTA5NDA2NC40NzQsInN1YiI6IjY3YTg3ODMwZjVhYWE2YWZhOWUwODUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wI567sXT48yO1vKSR93JDe_5dt1wUFSBOrfyD09cwwA',
    },
});

export default instance;
