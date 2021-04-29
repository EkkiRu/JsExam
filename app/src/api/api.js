import axios from 'axios';

const instanceAPI = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Client-ID bXaoO1S0aThLTL6iZU7zxAMy7T4PxTzD_PcNOFOS0N0',
    },
  });

export default instanceAPI;
