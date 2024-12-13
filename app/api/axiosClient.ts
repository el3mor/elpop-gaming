import axios from 'axios';


const apiUrl ="https://api.rawg.io/api"

const axiosClient = axios.create({
  baseURL: apiUrl,
  
});


export default axiosClient;
