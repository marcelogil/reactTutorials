import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 01ee9371a27620615f80f8681ce91d9ce21dc22d4a52502731833ed93a6a93be'
    }
});