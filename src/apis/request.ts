import axios, {AxiosResponse} from 'axios';

const baseURL = 'https://mshrai.com/';
const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

client.interceptors.request.use(async config => config);

client.interceptors.response.use((response: AxiosResponse) => {
  return response?.data;
});

const request = client;

export default request;
