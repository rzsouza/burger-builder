import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-80ea7.firebaseio.com/',
});

export default instance;
