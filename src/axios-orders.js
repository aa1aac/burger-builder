import axios from 'axios';

const instance = axios.create({
    baseURL: ''  // -> firebase base database url goes here 
});

export default instance;