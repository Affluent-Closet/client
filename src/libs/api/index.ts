import axios from 'axios';
import { SERVER_URL } from 'libs/constants';

const client = axios.create({
  withCredentials: false,
});
client.defaults.baseURL = `${SERVER_URL}`;

export default client;
