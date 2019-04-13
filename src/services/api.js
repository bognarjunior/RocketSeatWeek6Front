import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://omnistack-backend-bognar.herokuapp.com/'
});

export default api;